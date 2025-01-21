import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ languages = ["ES", "EN"], selectedLanguage, onLanguageChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang); // Llama la función de cambio de idioma
    setIsDropdownOpen(false); // Cierra el dropdown
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <button
        className="flex items-center justify-between px-4 py-2 text-sm font-bold text-white border rounded-md shadow-md border-dorado-600 bg-verde-500 hover:bg-dorado-500 lg:text-md dark:bg-negro-600 dark:hover:bg-dorado-600"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        {selectedLanguage}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`ml-2 w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Menú desplegable */}
      {isDropdownOpen && (
        <ul className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg w-28 dark:bg-negro-500 border-dorado-600">
          {languages.map((lang, index) => (
            <li key={index}>
              <button
                className="block w-full px-4 py-2 text-left text-negro-700 hover:bg-dorado-500 hover:text-white dark:text-white dark:hover:bg-dorado-600"
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;