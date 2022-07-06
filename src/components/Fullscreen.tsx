import React from 'react';

import left from '../assets/img/left.png';
import center from '../assets/img/center.png';
import right from '../assets/img/right.png';

const Fullscreen: React.FC = () => {
  return (
    <section className="fullscreen">
      <div className="fullscreen__items">
        <div className="fullscreen__item">
          <div className="fullscreen__img">
            <img src={left} alt="left-img" />
          </div>
        </div>
        <div className="fullscreen__item">
          <div className="fullscreen__img">
            <img src={center} alt="center-img" />
          </div>
        </div>
        <div className="fullscreen__item">
          <div className="fullscreen__img">
            <img src={right} alt="right-img" />
          </div>
        </div>
      </div>
      <div className="fullscreen__text text">
        <div className="text">
          <h1 className="text__title">Новая коллекция</h1>
          <div className="text__hr"></div>
          <a href="#">
            <h2 className="text__subtitle">Смотреть Новинки</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fullscreen;
