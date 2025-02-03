import React, { useState } from 'react';
import likeIconDark from '../../assets/icons/like_icon_dark.svg';
import likeIconLight from '../../assets/icons/like_icon_light.svg';
import likeActiveDark from '../../assets/icons/like_dark.svg';
import likeActiveLight from '../../assets/icons/like_light.svg';
import { useTranslation } from 'react-i18next';

function LikeButton({ theme }) {
  const [isLiked, setIsLiked] = useState(false);
  const { t } = useTranslation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  let icon;
  if (isLiked) {
    icon = theme === 'dark' ? likeActiveDark : likeActiveLight;
  } else {
    icon = theme === 'dark' ? likeIconDark : likeIconLight;
  }

  return (
    <div className="relative tooltip-wrapper">
      <button
        onClick={handleLikeClick}
        className="p-2 rounded-md focus:outline-none tooltip-btn"
      >
        <img src={icon} alt="Like" className="h-4 w-4" />
      </button>
      <span
        className={`absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 pointer-events-none transition-opacity duration-300 tooltip ${
          theme === 'dark' ? 'tooltip-dark' : 'tooltip-light'
        }`}
      >
        {isLiked ? t('tooltips.unlike') : t('tooltips.like')}
      </span>
    </div>
  );
}

export default LikeButton;
