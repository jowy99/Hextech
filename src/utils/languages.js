export const supportedLanguages = ['en', 'es']; // Idiomas soportados
export const defaultLanguage = 'en'; // Idioma predeterminado

export function getStaticPaths() {
  return supportedLanguages.map((lang) => ({
    params: { lang },
  }));
}

export function detectUserLanguage(acceptLanguage) {
    const browserLang = acceptLanguage?.split(',')[0]?.split('-')[0];
    return supportedLanguages.includes(browserLang) ? browserLang : defaultLanguage;
}