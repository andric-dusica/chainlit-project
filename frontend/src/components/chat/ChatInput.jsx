import React, { useState, useContext } from 'react';
import sendMsgIcon from '../../assets/icons/send_msg.svg';
import { ThemeContext } from '../../App';
import { useTranslation } from 'react-i18next';

function ChatInput({ onSend }) {
  const { theme } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [inputMoved, setInputMoved] = useState(false);
  const { t } = useTranslation();

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    onSend(inputValue);
    setInputValue('');
    setInputMoved(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`absolute w-full px-4 ${
        inputMoved ? 'bottom-0' : 'top-[50%] -translate-y-1/2'
      }`}
    >
      <div className={`flex items-center space-x-2 h-[100px] rounded-md px-2 m-4 max-w-[850px] mx-auto ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('input.placeholder')}
          className={`flex-grow bg-transparent rounded-md px-4 py-2 focus:ring-0 focus:ring-transparent focus:outline-none ${
            theme === 'dark'
              ? 'text-white placeholder-gray-400'
              : 'text-black placeholder-gray-500'
          }`}
        />
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className={`inline-flex items-center justify-center h-9 w-9 rounded-full ${
            inputValue.trim()
              ? 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          <img src={sendMsgIcon} alt="Send message" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
