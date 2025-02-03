import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from '../assets/icons/logo.svg'; // SVG logo

function Header({ theme, onThemeChange, onLogin }) {
  const { t } = useTranslation();

  return (
    <header className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 border-b ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
    }`}>
      
      <button 
        onClick={onLogin} 
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium rounded-md shadow-sm transition-colors 
            ${theme === 'dark' 
            ? 'text-white bg-gray-800 hover:bg-gray-700' 
            : 'text-gray-700 bg-gray-300 hover:bg-gray-200'} 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
        {t('auth.login')}
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="hidden sm:block text-lg font-semibold">{t('header.title')}</span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <LanguageSwitcher />
        <ThemeSwitcher currentTheme={theme} onThemeChange={onThemeChange} />
      </div>
    </header>
  );
}

export default Header;
