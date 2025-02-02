import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LoginModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      setError(t('errors.missingFields'));
    } else if (!isValidEmail(email)) {
      setError(t('errors.invalidEmail'));
    } else {
      setError('');
      alert(t('auth.loginSuccess'));
    }
  };

  const handleClose = () => {
    setError(''); 
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">{t('auth.loginTitle')}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('auth.email')}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {t('auth.password')}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
              onClick={handleClose}
            >
              {t('auth.cancel')}
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md"
              onClick={handleLogin}
            >
              {t('auth.login')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
