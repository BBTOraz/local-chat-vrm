/**
 * Простой тест OpenAI TTS
 * Запустите в браузерной консоли на странице вашего приложения
 */

import { speakWithOpenAI, synthesizeSpeechOpenAI, getAvailableVoices } from '../features/voices/openaiTts';
import { isOpenAIConfigured } from './openaiConfig';

/**
 * Тест 1: Простое воспроизведение
 */
export async function testSimpleTTS() {
  console.log('🎤 Тест 1: Простое воспроизведение');
  
  try {
    const audio = await speakWithOpenAI('Привет! Это тест OpenAI TTS.', {
      voice: 'nova',
      model: 'tts-1',
      speed: 1.0,
    });
    
    console.log('✅ Успешно! Аудио воспроизводится...');
    
    audio.addEventListener('ended', () => {
      console.log('✅ Воспроизведение завершено');
    });
    
  } catch (error) {
    console.error('❌ Ошибка:', error);
  }
}

/**
 * Тест 2: Синтез без воспроизведения
 */
export async function testSynthesizeOnly() {
  console.log('🎤 Тест 2: Синтез без воспроизведения');
  
  try {
    const startTime = Date.now();
    
    const audioBlob = await synthesizeSpeechOpenAI('Тест синтеза речи', {
      voice: 'alloy',
      model: 'tts-1',
    });
    
    const duration = Date.now() - startTime;
    
    console.log('✅ Синтез успешен!');
    console.log(`📊 Время синтеза: ${duration}ms`);
    console.log(`📦 Размер аудио: ${(audioBlob.size / 1024).toFixed(2)} KB`);
    
    return audioBlob;
    
  } catch (error) {
    console.error('❌ Ошибка:', error);
  }
}

/**
 * Тест 3: Все доступные голоса
 */
export async function testAllVoices() {
  console.log('🎤 Тест 3: Проверка всех голосов');
  
  const voices = getAvailableVoices();
  
  for (const voice of voices) {
    console.log(`\n🗣️ Голос: ${voice.name} (${voice.id})`);
    console.log(`   ${voice.description}`);
    
    try {
      const audio = await speakWithOpenAI(
        `Привет! Меня зовут ${voice.name}.`,
        { voice: voice.id, speed: 1.0 }
      );
      
      // Ждем окончания воспроизведения
      await new Promise<void>((resolve) => {
        audio.addEventListener('ended', () => resolve());
      });
      
      console.log(`✅ ${voice.name} - OK`);
      
    } catch (error) {
      console.error(`❌ ${voice.name} - Ошибка:`, error);
    }
  }
  
  console.log('\n✅ Тест всех голосов завершен');
}

/**
 * Тест 4: Разные скорости
 */
export async function testSpeeds() {
  console.log('🎤 Тест 4: Разные скорости воспроизведения');
  
  const speeds = [0.5, 1.0, 1.5, 2.0];
  const text = 'Это тест скорости речи';
  
  for (const speed of speeds) {
    console.log(`\n⚡ Скорость: ${speed}x`);
    
    try {
      const audio = await speakWithOpenAI(text, {
        voice: 'nova',
        speed: speed,
      });
      
      await new Promise<void>((resolve) => {
        audio.addEventListener('ended', () => resolve());
      });
      
      console.log(`✅ Скорость ${speed}x - OK`);
      
    } catch (error) {
      console.error(`❌ Скорость ${speed}x - Ошибка:`, error);
    }
  }
  
  console.log('\n✅ Тест скоростей завершен');
}

/**
 * Тест 5: Русский и английский
 */
export async function testMultilingual() {
  console.log('🎤 Тест 5: Многоязычность');
  
  const tests = [
    { lang: 'Русский', text: 'Привет! Как дела?' },
    { lang: 'English', text: 'Hello! How are you?' },
    { lang: '日本語', text: 'こんにちは！元気ですか？' },
    { lang: '中文', text: '你好！你好吗？' },
  ];
  
  for (const test of tests) {
    console.log(`\n🌍 Язык: ${test.lang}`);
    console.log(`   Текст: ${test.text}`);
    
    try {
      const audio = await speakWithOpenAI(test.text, {
        voice: 'nova',
      });
      
      await new Promise<void>((resolve) => {
        audio.addEventListener('ended', () => resolve());
      });
      
      console.log(`✅ ${test.lang} - OK`);
      
    } catch (error) {
      console.error(`❌ ${test.lang} - Ошибка:`, error);
    }
  }
  
  console.log('\n✅ Тест многоязычности завершен');
}

/**
 * Тест 6: Проверка конфигурации
 */
export function testConfiguration() {
  console.log('🎤 Тест 6: Проверка конфигурации');
  
  const configured = isOpenAIConfigured();
  
  if (configured) {
    console.log('✅ OpenAI API ключ настроен');
    console.log('💡 Можно начинать тесты!');
  } else {
    console.error('❌ OpenAI API ключ НЕ настроен');
    console.error('📝 Создайте .env файл с VITE_OPENAI_API_KEY');
    console.error('🔄 Перезапустите dev сервер');
  }
  
  return configured;
}

/**
 * Запустить все тесты
 */
export async function runAllTests() {
  console.log('🚀 Запуск всех тестов OpenAI TTS\n');
  
  // Проверка конфигурации
  if (!testConfiguration()) {
    return;
  }
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Тест 1
  await testSimpleTTS();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Тест 2
  await testSynthesizeOnly();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Можно добавить другие тесты при необходимости
  // await testAllVoices(); // Займет ~1 минуту
  // await testSpeeds();
  // await testMultilingual();
  
  console.log('\n✅ Все тесты завершены!');
}

// Экспортируем для глобального доступа
if (typeof window !== 'undefined') {
  (window as any).openaiTtsTests = {
    testSimpleTTS,
    testSynthesizeOnly,
    testAllVoices,
    testSpeeds,
    testMultilingual,
    testConfiguration,
    runAllTests,
  };
  
  console.log('💡 Тесты OpenAI TTS доступны в window.openaiTtsTests');
  console.log('💡 Запустите: window.openaiTtsTests.runAllTests()');
}
