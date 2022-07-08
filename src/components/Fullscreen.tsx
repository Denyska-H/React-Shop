import React from 'react';

import MainHeader from './MainHeader';

const Fullscreen: React.FC = () => {
  return (
    <div className="fullscreen">
      <MainHeader />
      <div className="fullscreen__text text">
        <div className="text">
          <h1 className="text__title">Новая коллекция</h1>
          <div className="text__hr"></div>
          <a href="#">
            <h2 className="text__subtitle">Смотреть Новинки</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
