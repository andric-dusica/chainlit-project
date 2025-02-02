import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './config/i18n';
import LoginModal from './components/LoginModal';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t, i18n } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="relative inline-block mb-8">
        <LanguageSwitcher />
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
  );
}

export default App;
