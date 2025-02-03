import React, { useState, useEffect, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import './config/i18n';
import LoginModal from './components/LoginModal';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';

export const ThemeContext = createContext();

function App() {
  const { t, i18n } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light'; 
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    console.log('Tema se menja:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    if (newTheme === 'system') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemDark ? 'dark' : 'light');
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white'} flex flex-col items-center p-4`}>
        <header className="relative inline-block mb-8 flex gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher onThemeChange={handleThemeChange} currentTheme={theme} />
        </header>
        <main className="text-center">
          <h1 className="text-3xl font-bold">{t('header.title')}</h1>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md"
          >
            {t('buttons.openLogin')}
          </button>
        </main>
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
