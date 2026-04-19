/**
 * StreamingTtsQueue — sentence-level streaming TTS for real-time voice.
 *
 * Strategy:
 *  1. Tokens arrive via pushToken(). They are appended to an internal buffer.
 *  2. detectBoundary() scans the buffer for sentence boundaries (.!? or \n\n).
 *     Only sentences >= MIN_SENTENCE_LENGTH characters are emitted.
 *  3. Each detected sentence immediately kicks off a synthesize() call. The
 *     resulting Promise<ArrayBuffer> is pushed onto synthesisQueue.
 *  4. A single "drainer" loop waits for queue[0] to resolve, plays it via
 *     onSpeakChunk(), removes it from the queue, and repeats — guaranteeing
 *     sequential playback even when synthesis overlaps with playback.
 *  5. cancel() sets a flag that prevents any pending callbacks from playing.
 */

const MIN_SENTENCE_LENGTH = 15;

export interface StreamingTtsQueueOptions {
  /** Inject dependency: convert text to audio bytes. */
  synthesize: (text: string) => Promise<ArrayBuffer>;
  /** Play one audio chunk and resolve when playback is done. */
  onSpeakChunk: (audio: ArrayBuffer) => Promise<void>;
  /** Fires once, just before the very first chunk starts playing. */
  onFirstChunkStart?: () => void;
  /** Fires when all queued synthesis + playback is done. */
  onComplete?: () => void;
}

interface SynthesisEntry {
  /** The synthesize() promise. Resolves to null when cancelled. */
  promise: Promise<ArrayBuffer | null>;
}

/**
 * Scan `buffer` for the first sentence boundary.
 *
 * Priority:
 *   1. "\n\n" (paragraph break)
 *   2. [.!?] followed by a space or end-of-string
 *
 * Returns { sentence, remainder } when a boundary is found and the sentence
 * meets the minimum length requirement, otherwise returns null.
 */
function detectBoundary(
  buffer: string
): { sentence: string; remainder: string } | null {
  // 1. Paragraph break (highest priority)
  const paraIdx = buffer.indexOf("\n\n");
  if (paraIdx !== -1) {
    const sentence = buffer.slice(0, paraIdx).trim();
    const remainder = buffer.slice(paraIdx + 2);
    if (sentence.length >= MIN_SENTENCE_LENGTH) {
      return { sentence, remainder };
    }
    // Sentence too short — skip past the break and keep accumulating
    // (don't return null here; fall through so we can try .!? below)
  }

  // 2. Punctuation boundary: .!? followed by space or end-of-string
  //    If the \n\n branch fell through (sentence too short), start scanning
  //    after the paragraph break to avoid producing a sentence that spans it.
  const searchStart = paraIdx !== -1 ? paraIdx + 2 : 0;
  for (let i = searchStart; i < buffer.length; i++) {
    const ch = buffer[i];
    if (ch === "." || ch === "!" || ch === "?") {
      const isAtEnd = i === buffer.length - 1;
      const nextIsSpace = i + 1 < buffer.length && buffer[i + 1] === " ";
      if (isAtEnd || nextIsSpace) {
        const sentence = buffer.slice(0, i + 1).trim();
        const remainder = buffer.slice(i + (nextIsSpace ? 2 : 1));
        if (sentence.length >= MIN_SENTENCE_LENGTH) {
          return { sentence, remainder };
        }
        // Too short — skip this boundary and continue scanning
      }
    }
  }

  return null;
}

export class StreamingTtsQueue {
  private readonly _options: StreamingTtsQueueOptions;

  /** Accumulated text waiting to be cut at a sentence boundary. */
  private _buffer = "";

  /** Ordered list of in-flight synthesis promises. */
  private _queue: SynthesisEntry[] = [];

  /** True once the drainer loop has been kicked off. */
  private _draining = false;

  /** True once the very first chunk has started playing. */
  private _firstChunkFired = false;

  /** Set by cancel() — makes all pending callbacks no-ops. */
  private _cancelled = false;

  /** Incremented each time a new session starts; checked by the drainer. */
  private _generation = 0;

  /** True while there is pending synthesis or active playback. */
  private _isActive = false;

  constructor(options: StreamingTtsQueueOptions) {
    this._options = options;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  /** Feed a token from the LLM stream into the buffer. */
  pushToken(token: string): void {
    if (this._cancelled) return;

    this._buffer += token;
    this._isActive = true;
    this._flush();
  }

  /**
   * Signal that the LLM stream has ended.
   * Flushes any remaining buffer content (even if it doesn't meet the
   * minimum length), then waits for the drainer to finish.
   */
  endStream(): void {
    if (this._cancelled) return;

    // Flush remainder regardless of minimum length
    const remaining = this._buffer.trim();
    this._buffer = "";
    if (remaining.length > 0) {
      this._enqueue(remaining);
    }
  }

  /**
   * Cancel all pending synthesis and playback.
   * Any already-resolving synthesis callbacks will see _cancelled=true and
   * drop their result without calling onSpeakChunk.
   */
  cancel(): void {
    this._cancelled = true;
    this._isActive = false;
    this._buffer = "";
    this._queue = [];
    this._generation++; // invalidates the current drainer loop
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  /**
   * Scan the buffer for sentence boundaries and enqueue synthesis for each
   * complete sentence found. Stops when no more boundaries are detected.
   */
  private _flush(): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const result = detectBoundary(this._buffer);
      if (result) {
        this._buffer = result.remainder;
        this._enqueue(result.sentence);
      } else {
        break;
      }
    }
  }

  /** Kick off synthesis for `text` and push a SynthesisEntry onto the queue. */
  private _enqueue(text: string): void {
    if (this._cancelled) return;

    const capturedGeneration = this._generation;
    const promise: Promise<ArrayBuffer | null> = this._options
      .synthesize(text)
      .then((buffer) => {
        // If cancelled or session replaced after synthesis started, drop result
        if (this._cancelled || this._generation !== capturedGeneration) {
          return null;
        }
        return buffer;
      })
      .catch((err) => {
        console.error("[StreamingTtsQueue] Synthesis failed:", err);
        return null;
      });

    this._queue.push({ promise });

    // Start the drainer if it isn't already running
    if (!this._draining) {
      this._draining = true;
      void this._drain(capturedGeneration);
    }
  }

  /**
   * Sequential drainer: processes queue entries one-by-one, waiting for each
   * synthesis Promise to resolve before playing it, then moves to the next.
   */
  private async _drain(generation: number): Promise<void> {
    while (this._queue.length > 0 && !this._cancelled && this._generation === generation) {
      const entry = this._queue[0];
      const buffer = await entry.promise;

      // Remove from front of queue
      this._queue.shift();

      // Check for cancellation after await
      if (this._cancelled || this._generation !== generation || buffer === null) {
        continue;
      }

      // Fire onFirstChunkStart once
      if (!this._firstChunkFired) {
        this._firstChunkFired = true;
        try {
          this._options.onFirstChunkStart?.();
        } catch (err) {
          console.error("[StreamingTtsQueue] onFirstChunkStart error:", err);
        }
      }

      // Play the chunk and wait for it to finish
      try {
        await this._options.onSpeakChunk(buffer);
      } catch (err) {
        console.error("[StreamingTtsQueue] onSpeakChunk error:", err);
      }
    }

    // Drainer finished
    this._draining = false;

    // Only call onComplete if this generation is still valid
    if (!this._cancelled && this._generation === generation) {
      this._isActive = false;
      try {
        this._options.onComplete?.();
      } catch (err) {
        console.error("[StreamingTtsQueue] onComplete error:", err);
      }
    }
  }
}
