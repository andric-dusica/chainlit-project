import React, { useState } from 'react';
import editIconLight from '../../assets/icons/edit_icon_light.svg';
import editIconDark from '../../assets/icons/edit_icon_dark.svg';
import copyIconLight from '../../assets/icons/copy_icon_light.svg';
import copyIconDark from '../../assets/icons/copy_icon_dark.svg';
import { useTranslation } from 'react-i18next';

function Message({ message, theme, onSaveEdit }) {
  const isUser = message.sender === 'user';
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.text);
  const [showCopied, setShowCopied] = useState(false);
  const { t } = useTranslation();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSaveEdit(message.id, editText); 
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditText(message.text);
    setIsEditing(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(message.text).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  return (
    <div className={`group flex items-center ${isUser ? 'justify-end' : 'justify-start'}`}>
      {isUser && !isEditing && (
        <button
          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleEditClick}
        >
          <img
            src={theme === 'dark' ? editIconDark : editIconLight}
            alt="Edit"
            className="h-5 w-5"
          />
        </button>
      )}
      <div
        className={`px-4 py-4 my-1 rounded-md ${
          isEditing ? 'w-[850px]' : 'max-w-[80%]'
        } ${
          isUser
            ? theme === 'dark'
              ? 'bg-gray-700 text-white self-end text-right inline-block'
              : 'bg-gray-300 text-black self-end text-right inline-block'
            : theme === 'dark'
            ? 'bg-transparent text-white self-start text-left inline-block'
            : 'bg-transparent text-black self-start text-left inline-block'
        }`}
      >
        {isEditing ? (
          <div>
            <textarea
                value={editText}
                onChange={(e) => {
                    setEditText(e.target.value);
                    e.target.style.height = "auto"; 
                    e.target.style.height = `${e.target.scrollHeight}px`; 
                }}
                className="rounded-md p-1 w-full bg-transparent focus:ring-0 focus:ring-transparent focus:outline-none overflow-auto max-h-[200px] resize-none"
            />
            <div className="flex gap-2 mt-1">
              <button
                className="text-green-600 hover:underline"
                onClick={handleSaveClick}
              >
                {t('buttons.save')}
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={handleCancelClick}
              >
                {t('buttons.cancel')}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>{message.text}</p>
            {message.sender !== 'user' && (
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={handleCopyClick}
                  className="p-2 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  <img
                    src={theme === 'dark' ? copyIconDark : copyIconLight}
                    alt="Copy"
                    className="h-4 w-4"
                  />
                </button>
                {showCopied && (
                 <span className="text-xs text-green-500">{t('copy.copied')}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
