import React from 'react';
import { Link } from 'react-router-dom';

import favorites from '../../assets/img/favorites.svg';

const FavoritesEmpty: React.FC = () => {
  return (
    <>
      <div className="favorites__empty">
        <div className="container">
          <h2>Обране</h2>
          <img src={favorites} alt="Empty favorites" />
          <p>
            В ОБРАНОМУ НЕМАЄ ТОВАРІВ
            <br />
            ТИЦЯЙ ❤ ЩОБ НЕ ВТРАТИТИ
          </p>
          <Link to="/catalog" className="favorites__button-back">
            <span>Перейти до каталогу</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FavoritesEmpty;
