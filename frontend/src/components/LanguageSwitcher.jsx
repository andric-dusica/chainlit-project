import React, { useState, useEffect, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../App'; 

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium ${
          theme === 'dark'
            ? 'text-white bg-gray-800 hover:bg-gray-700 hover:text-white'
            : 'text-gray-700 bg-gray-300 hover:bg-gray-100 hover:text-black'
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        {i18n.language === 'en' ? 'Language' : 'Langue'}
      </button>
      {isOpen && (
        <ul
          className={`absolute z-10 mt-2 w-32 sm:w-40 rounded-md top-[49px] ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
          } shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <li
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm cursor-pointer rounded-t-md ${
              theme === 'dark' ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            English
          </li>
          <li
            onClick={() => changeLanguage('fr')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm cursor-pointer rounded-b-md ${
              theme === 'dark' ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            French
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
