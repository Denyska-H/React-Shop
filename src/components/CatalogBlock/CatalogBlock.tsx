import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addFavoriteItems } from '../../redux/favorite/slice';
import { FavoriteItem } from '../../redux/favorite/types';
import { RootState } from '../../redux/store';

type CatalogBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: string[];
  price: number;
};

const CatalogBlock: React.FC<CatalogBlockProps> = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useDispatch();

  const onClickAddFavorite = () => {
    const favoriteItem: FavoriteItem = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
      sizes: [],
    };
    dispatch(addFavoriteItems(favoriteItem));
  };

  const { favorites } = useSelector((state: RootState) => state.favorite);
  const isMountedFavorites = React.useRef(false);

  React.useEffect(() => {
    if (isMountedFavorites.current) {
      const dataFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', dataFavorites);
    }
    isMountedFavorites.current = true;
  }, [favorites]);

  return (
    <>
      <div className="item__body">
        <div className="item__img">
          <Link to={`/product/${id}`}>
            <img src={imageUrl} alt="catalog" />
          </Link>
          <button aria-label="favoriteBtn" className="item__favorite" onClick={onClickAddFavorite}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="item__info">
          <div className="item__title">{title}</div>
          <div className="item__price">{price} грн</div>
          <div className="item__sizes">{sizes}</div>
        </div>
      </div>
    </>
  );
};

export default CatalogBlock;
