import fs from 'fs';
import path from 'path';

// Obtener los idiomas soportados
export function getSupportedLanguages() {
  try {
    const localesPath = path.resolve('./src/locales');
    const files = fs.readdirSync(localesPath);

    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.basename(file, '.json')); // Eliminar extensiones
  } catch (error) {
    console.error('Error al obtener los idiomas soportados:', error.message);
    throw new Error('No se pudieron cargar los idiomas soportados.');
  }
}

// Obtener traducciones para un idioma específico
export function getTranslation(lang) {
  try {
    const localesPath = path.resolve('./src/locales', `${lang}.json`);
    const data = fs.readFileSync(localesPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error al cargar las traducciones para "${lang}":`, error.message);
    throw new Error(`No se pudo cargar el archivo de traducción para el idioma: ${lang}`);
  }
}