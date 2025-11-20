/**
 * Voice Agent State Machine
 * Решает проблему одновременных запросов при real-time STT
 */

export type VoiceAgentState = 
  | 'idle'           // Ожидание пользователя
  | 'listening'      // Активное слушание (VAD обнаружил речь)
  | 'processing'     // Запрос отправлен на сервер
  | 'speaking'       // Воспроизведение TTS
  | 'interrupting';  // Пользователь перебил бота

export type VoiceAgentEvent =
  | 'START_LISTENING'    // VAD: обнаружена речь
  | 'STOP_LISTENING'     // VAD: пауза > threshold
  | 'SEND_TO_SERVER'     // Отправка транскрипта на сервер
  | 'SERVER_RESPONSE'    // Получен ответ от сервера
  | 'START_SPEAKING'     // Начало TTS
  | 'FINISH_SPEAKING'    // TTS завершен
  | 'INTERRUPT'          // Пользователь перебил
  | 'RESET';             // Сброс в idle

// Допустимые переходы
const transitions: Record<VoiceAgentState, VoiceAgentEvent[]> = {
  idle: ['START_LISTENING'],
  listening: ['STOP_LISTENING', 'SEND_TO_SERVER', 'INTERRUPT', 'RESET'],
  processing: ['SERVER_RESPONSE', 'INTERRUPT', 'RESET'],
  speaking: ['FINISH_SPEAKING', 'INTERRUPT', 'RESET'],
  interrupting: ['START_LISTENING', 'RESET']
};

export class VoiceAgentStateMachine {
  private currentState: VoiceAgentState = 'idle';
  private listeners: Set<(state: VoiceAgentState) => void> = new Set();

  getCurrentState(): VoiceAgentState {
    return this.currentState;
  }

  canTransition(event: VoiceAgentEvent): boolean {
    return transitions[this.currentState]?.includes(event) ?? false;
  }

  transition(event: VoiceAgentEvent): boolean {
    if (!this.canTransition(event)) {
      console.warn(`Invalid transition: ${event} from ${this.currentState}`);
      return false;
    }

    const newState = this.getNextState(event);
    if (newState) {
      this.currentState = newState;
      this.notifyListeners();
      return true;
    }
    return false;
  }

  private getNextState(event: VoiceAgentEvent): VoiceAgentState | null {
    switch (event) {
      case 'START_LISTENING':
        return 'listening';
      case 'STOP_LISTENING':
      case 'SEND_TO_SERVER':
        return 'processing';
      case 'SERVER_RESPONSE':
      case 'START_SPEAKING':
        return 'speaking';
      case 'FINISH_SPEAKING':
        return 'idle';
      case 'INTERRUPT':
        return 'interrupting';
      case 'RESET':
        return 'idle';
      default:
        return null;
    }
  }

  subscribe(listener: (state: VoiceAgentState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentState));
  }

  /**
   * Проверка: можно ли отправить новый запрос на сервер?
   */
  canSendRequest(): boolean {
    return this.currentState === 'listening';
  }

  /**
   * Проверка: воспроизводится ли сейчас TTS?
   */
  isSpeaking(): boolean {
    return this.currentState === 'speaking';
  }

  /**
   * Проверка: обрабатывается ли запрос?
   */
  isProcessing(): boolean {
    return this.currentState === 'processing';
  }
}
