// src/App.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t, i18n } = useTranslation();

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
      </main>
    </div>
  );
}

export default App;
