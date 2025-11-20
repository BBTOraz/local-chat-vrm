/**
 * OpenAI API Configuration
 * Safely retrieves OpenAI API credentials from environment variables
 */

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_BASE = import.meta.env.VITE_OPENAI_API_BASE || 'https://api.openai.com/v1';

/**
 * Get OpenAI API Key from environment
 * @throws Error if API key is not configured
 */
export const getOpenAIApiKey = (): string => {
  if (!OPENAI_API_KEY) {
    throw new Error(
      'OpenAI API Key не настроен. Добавьте VITE_OPENAI_API_KEY в .env файл'
    );
  }
  return OPENAI_API_KEY;
};

/**
 * Get OpenAI API Base URL
 */
export const getOpenAIApiBase = (): string => {
  return OPENAI_API_BASE;
};

/**
 * Check if OpenAI API is configured
 */
export const isOpenAIConfigured = (): boolean => {
  return !!OPENAI_API_KEY;
};

/**
 * Create headers for OpenAI API requests
 */
export const getOpenAIHeaders = (): HeadersInit => {
  return {
    'Authorization': `Bearer ${getOpenAIApiKey()}`,
    'Content-Type': 'application/json',
  };
};
