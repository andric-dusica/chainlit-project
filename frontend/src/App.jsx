import React, { useState, useEffect, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import './config/i18n';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Chat from './components/chat/Chat';

export const ThemeContext = createContext();

function App() {
  const { i18n } = useTranslation();
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
      <div className={`min-h-screen overflow-hidden ${theme === 'light' ? 'bg-transparent text-black' : 'bg-gray-900 text-white'}`}>
        <Header theme={theme} onThemeChange={handleThemeChange} onLogin={() => setIsLoginOpen(true)} />

        <main className="flex flex-col items-center p-6">
          <Chat />
        </main>

        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
