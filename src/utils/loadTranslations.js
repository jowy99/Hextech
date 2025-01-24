import es from '../locales/es.json';
import en from '../locales/en.json';

const translations = { es, en };

export async function loadTranslations(lang) {
  return translations[lang] || translations['en']; // Retorna el idioma o 'en' por defecto
}