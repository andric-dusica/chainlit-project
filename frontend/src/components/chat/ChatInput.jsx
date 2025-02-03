import React, { useState, useRef } from 'react';
import sendMsgIcon from '../../assets/icons/send_msg.svg';
import { useTranslation } from 'react-i18next';


function ChatInput({ onSend, theme }) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [inputMoved, setInputMoved] = useState(false);
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    onSend(inputValue);
    setInputValue('');
    textareaRef.current.style.height = '40px'; 
    setInputMoved(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`absolute w-full px-4 bottom-[-60px] ${inputMoved ? 'md:bottom-[-140px]' : 'top-[60%] -translate-y-1/2'}`}>
      <div className={`flex items-center space-x-2 rounded-md px-2 my-0 md:my-4 max-w-[850px] mx-auto ${
        theme === 'dark' ? 'bg-gray-300' : 'bg-gray-300'
      }`}>
        
        {/* Zamena input-a sa textarea */}
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            e.target.style.height = 'auto';  
            e.target.style.height = `${e.target.scrollHeight}px`; 
          }}
          onKeyDown={handleKeyDown}
          placeholder={t('input.placeholder')}
          className={`flex-grow bg-transparent rounded-md px-4 py-2 focus:ring-0 focus:ring-transparent focus:outline-none overflow-auto resize-none max-h-[200px] ${
            theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'
          }`}
          style={{ minHeight: "100px" }} 
        />

        <div className="relative group">
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className={`inline-flex items-center justify-center h-9 w-9 rounded-full ${
              inputValue.trim()
                ? 'bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-500'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            aria-label={t('tooltips.send')}
          >
            <img src={sendMsgIcon} alt="Send message" className="h-6 w-6" />
          </button>

          {!inputValue.trim() && (
            <span
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity w-[160px] ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {t('tooltips.disabledSend')}
            </span>
          )}

          {inputValue.trim() && (
            <span
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity w-[130px] text-center ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {t('tooltips.send')}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}

export default ChatInput;
