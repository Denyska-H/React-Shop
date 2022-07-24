import React from 'react';
import { Link } from 'react-router-dom';

import { MainHeader } from '../MainHeader';

const Fullscreen: React.FC = () => {
  return (
    <div className="fullscreen">
      <MainHeader />
      <div className="fullscreen__text text">
        <div className="text">
          <h1 className="text__title">Нова колекція</h1>
          <div className="text__hr"></div>
          <Link to="/catalog">
            <h2 className="text__subtitle">Дізнатися новинки</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
