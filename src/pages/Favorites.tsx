import React from 'react';
import { useSelector } from 'react-redux';

import { FavoritesBlock, FavoritesEmpty, Footer, Header } from '../components';
import { RootState } from '../redux/store';

const Favorites: React.FC = () => {
  const { favorites } = useSelector((state: RootState) => state.favorite);

  return (
    <>
      <Header />
      {favorites.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <section className="favorites">
          <div className="container">
            <div className="favorites__title">Обране</div>
            <div className="favorites__row">
              {favorites.map((item) => (
                <FavoritesBlock key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Favorites;
