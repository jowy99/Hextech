import React, { useState, useEffect, useRef } from 'react';
import { supportedLanguages, defaultLanguage } from '../../../utils/languages'; // Ajusta la ruta según tu proyecto

const Dropdown = ({ languages, onLanguageChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Función para obtener el idioma de la URL
    const detectLanguageFromURL = () => {
      const pathLang = window.location.pathname.split('/')[1]; // Idioma en la URL
      const storedLanguage = localStorage.getItem('selectedLanguage'); // Idioma guardado

      if (supportedLanguages.includes(pathLang)) {
        return pathLang; // Usar el idioma de la URL si es válido
      } else if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
        return storedLanguage; // Usar el idioma previamente seleccionado
      }
      return defaultLanguage; // Usar el idioma por defecto
    };

    const detectedLanguage = detectLanguageFromURL();
    setCurrentLanguage(detectedLanguage);

    // Redirigir si el idioma en la URL no es válido
    const pathLang = window.location.pathname.split('/')[1];
    if (!supportedLanguages.includes(pathLang)) {
      const newPath = `/${detectedLanguage}${window.location.pathname}`;
      window.history.replaceState(null, '', newPath);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('selectedLanguage', lang); // Guardar el idioma seleccionado
    const newPath = `/${lang}${window.location.pathname.replace(/^\/(en|es)/, '')}`;
    window.location.href = newPath;
    setIsDropdownOpen(false);
    if (onLanguageChange) onLanguageChange(lang);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between px-4 py-2 text-sm font-bold text-white border rounded-md shadow-md border-dorado-500 bg-verde-500 hover:bg-dorado-500 lg:text-md dark:bg-negro-600 dark:hover:bg-dorado-600"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        {currentLanguage.toUpperCase()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`ml-2 w-4 h-4 transition-transform ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg w-fit dark:bg-negro-500 border-dorado-600">
          {languages.map((lang) => (
            <li key={lang}>
              <button
                className="block w-full px-4 py-2 text-left text-negro-700 hover:bg-dorado-500 hover:text-white dark:text-white dark:hover:bg-dorado-600"
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;