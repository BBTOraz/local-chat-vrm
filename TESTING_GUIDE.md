# 🧪 Quick Test Guide - OpenAI TTS

## ✅ Build Status
Project successfully builds with **only OpenAI TTS**. All Kokoro TTS and Koeiromap code has been removed.

---

## 🚀 How to Test

### 1. Start Development Server
```powershell
npm run dev
```

### 2. Open Browser
Navigate to: `http://localhost:5173`

### 3. Verify API Key
Check that `.env` file exists with:
```
VITE_OPENAI_API_KEY=sk-...
```

### 4. Test TTS Synthesis
1. **Open DevTools** (F12) → Console tab
2. **Send a message** to the AI
3. **Listen for audio** - should be natural-sounding OpenAI TTS
4. **Check console** for any errors

---

## 🔍 What to Check

### ✅ Expected Behavior:
- Audio plays automatically after AI response
- Voice sounds natural (OpenAI TTS quality)
- No "garbage" audio or broken sounds
- Default voice: `nova` (female, warm)

### ❌ If No Audio:
**Check Console for Errors:**
```javascript
// Expected to see:
"OpenAI API Key loaded: true"

// Should NOT see:
"Failed to fetch OpenAI TTS audio"
"API key missing"
```

**Verify .env file:**
```powershell
Get-Content .env
# Should show: VITE_OPENAI_API_KEY=sk-...
```

**Restart dev server:**
```powershell
# Ctrl+C to stop
npm run dev
```

---

## 🎵 Change Voice (Optional)

To change the default voice from `nova` to another:

**Edit:** `src/features/messages/messages.ts`

**Find this code (around line 57):**
```typescript
screenplays.push({
  expression: expression as EmotionType,
  talk: {
    voiceEngine,
    voice: "nova", // ← Change this
    message: message,
  },
});
```

**Available voices:**
- `"alloy"` - Neutral, balanced
- `"echo"` - Male, clear
- `"fable"` - British accent
- `"onyx"` - Deep male
- `"nova"` - Female, warm (default)
- `"shimmer"` - Female, soft

---

## 🐛 Troubleshooting

### Problem: "Cannot find module 'kokoroTts'"
**Solution:** Clear cache and rebuild
```powershell
Remove-Item -Recurse -Force node_modules/.vite
npm run dev
```

### Problem: "API key is missing"
**Solution:** Verify .env file
```powershell
# Check if file exists
Test-Path .env

# Check content
Get-Content .env

# Should see: VITE_OPENAI_API_KEY=sk-...
```

### Problem: Audio doesn't play
**Possible causes:**
1. ❌ API key invalid - Test with `test-openai-tts.html`
2. ❌ Browser blocked autoplay - Click page first
3. ❌ .env not loaded - Restart dev server
4. ❌ API quota exceeded - Check OpenAI dashboard

---

## 📊 Console Debugging

**Open DevTools (F12) and run:**
```javascript
// Check if OpenAI API key is loaded
console.log("API Key exists:", !!import.meta.env.VITE_OPENAI_API_KEY);

// Check voice engine
import { DEFAULT_VOICE_ENGINE } from './src/features/messages/messages';
console.log("Voice Engine:", DEFAULT_VOICE_ENGINE);
// Should log: "Voice Engine: OpenAI TTS"
```

---

## 🎯 Success Criteria

- [ ] ✅ Dev server starts without errors
- [ ] ✅ Page loads successfully
- [ ] ✅ AI responds to messages
- [ ] ✅ Audio plays after AI response
- [ ] ✅ Voice sounds natural (OpenAI quality)
- [ ] ✅ No console errors
- [ ] ✅ No "garbage" audio

---

## 📝 Next Steps After Testing

If everything works:
1. ✅ Delete legacy TTS files (see CLEANUP_REPORT.md)
2. ✅ Update documentation
3. ✅ Consider adding voice selection UI (optional)
4. ✅ Consider cleaning up STT to OpenAI Whisper only

If issues persist:
1. 🔍 Share console errors
2. 🔍 Test with `test-openai-tts.html` (should work)
3. 🔍 Check Network tab for failed API requests

---

**Good luck! 🎉**

If you need help, share:
- Console errors (F12 → Console)
- Network errors (F12 → Network → Filter: "openai")
- .env file status (without revealing full API key)
