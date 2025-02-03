import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SunIcon from '../assets/icons/light.svg';
import MoonIcon from '../assets/icons/dark.svg';

function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 cursor-pointer"
      >
        <img
          src={currentTheme === 'dark' ? MoonIcon : SunIcon}
          alt={currentTheme === 'dark' ? 'Dark theme' : 'Light theme'}
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </button>
      {isOpen && (
        <ul
          className={`absolute left-[-100px] top-[51px] z-10 mt-2 rounded-md shadow-md w-32 sm:w-40 ${
            currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <li
            onClick={() => {
              onThemeChange('light');
              setIsOpen(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 cursor-pointer rounded-t-md ${
              currentTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}
          >
            {t('theme.light')}
          </li>
          <li
            onClick={() => {
              onThemeChange('dark');
              setIsOpen(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 cursor-pointer ${
              currentTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}
          >
            {t('theme.dark')}
          </li>
          <li
            onClick={() => {
              onThemeChange('system');
              setIsOpen(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 cursor-pointer rounded-b-md ${
              currentTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}
          >
            {t('theme.system')}
          </li>
        </ul>
      )}
    </div>
  );
}

export default ThemeSwitcher;
