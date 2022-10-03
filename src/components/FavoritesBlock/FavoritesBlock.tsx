import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFavoriteItems } from '../../redux/favorite/slice';

type FavoritesBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: [];
};

const FavoritesBlock: React.FC<FavoritesBlockProps> = ({ id, imageUrl, title, price, sizes }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeFavoriteItems(id));
  };

  return (
    <div className="favorites__column">
      <div className="favorites__img">
        <Link to={`/product/${id}`} aria-label="favoritesImg">
          <img src={imageUrl} alt="" />
        </Link>
        <button aria-label="favoritesIcon" className="favorites__icon" onClick={onClickRemove}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <div className="favorites__info">
        <div className="favorites__label">{title}</div>
        <div className="favorites__price">{price} грн</div>
        <div className="favorites__sizes">{sizes}</div>
      </div>
    </div>
  );
};

export default FavoritesBlock;
