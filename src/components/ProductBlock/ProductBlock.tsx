import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItems } from '../../redux/cart/slice';
import { addFavoriteItems } from '../../redux/favorite/slice';
import { FavoriteItem } from '../../redux/favorite/types';
import { RootState } from '../../redux/store';
import { CartItemProps, ProductBlockProps } from './types';

const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  imageUrl,
  newId,
  title,
  price,
  sizes,
}) => {
  const dispatch = useDispatch();

  const [sizesOpen, setSizesOpen] = React.useState(false);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const [descriptionOpen, setDescriptionOpen] = React.useState(false);
  const [compositionOpen, set–°ompositionOpen] = React.useState(false);

  const onClickActiveSize = (size: number) => {
    setActiveSize(size);
    setSizesOpen(!sizesOpen);
  };

  const { items } = useSelector((state: RootState) => state.cart);
  const { favorites } = useSelector((state: RootState) => state.favorite);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const dataCart = JSON.stringify(items);
      localStorage.setItem('cart', dataCart);
      const dataFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', dataFavorites);
    }
    isMounted.current = true;
  }, [items, favorites]);

  const onClickAddItem = () => {
    dispatch(
      addItems({
        id,
        count: 0,
        imageUrl,
        price,
        size: sizes[activeSize],
        sizes,
        title,
        newId,
      } as CartItemProps),
    );
  };

  const onClickAddFavoriteItems = () => {
    const favoriteItem: FavoriteItem = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
      sizes: sizes,
    };
    console.log(favoriteItem);
    dispatch(addFavoriteItems(favoriteItem));
  };

  return (
    <>
      <div className="card__row">
        <div className="card__column">
          <div className="card__img">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="card__column">
          <div className="card__title">{title}</div>
          <div className="card__price">{price} –≥—Ä–Ĺ</div>
          <div className="card__popup" onClick={() => setSizesOpen(!sizesOpen)}>
            –ě–Ī–Ķ—Ä—Ė—ā—Ć —Ä–ĺ–∑–ľ—Ė—Ä
            <svg
              className={sizesOpen ? 'active-svg' : 'default-svg'}
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3.88903L8.88906 -3.05043e-05L10 1.11091L5 6.1109L1.32478e-08 1.11091L1.11094 -3.04116e-05L5 3.88903Z"
                fill="#E0BEA2"
              />
            </svg>
          </div>
          <div className={sizesOpen ? 'open' : 'closed'}>
            <ul className="sizes">
              {sizes.map((elem, id) => (
                <li
                  className={
                    id === activeSize ? 'sizes__items sizes__items_active' : 'sizes__items'
                  }
                  key={id}
                  onClick={() => onClickActiveSize(id)}>
                  {elem}
                </li>
              ))}
            </ul>
          </div>
          <div className="card__buttons">
            <button className="card__cart-button" onClick={onClickAddItem}>
              <span>—É –ļ–ĺ—ą–ł–ļ</span>
            </button>
            <button className="card__favorite-button" onClick={onClickAddFavoriteItems}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.50061 1.14671C9.26233 -0.435007 11.9848 -0.382508 13.682 1.31771C15.3785 3.01868 15.437 5.72763 13.859 7.49459L7.49911 13.8635L1.14073 7.49459C-0.437237 5.72763 -0.377988 3.01418 1.31773 1.31771C3.01645 -0.380258 5.73365 -0.437257 7.50061 1.14671ZM12.62 2.37744C11.495 1.25096 9.68007 1.20521 8.50259 2.26269L7.50136 3.16118L6.49938 2.26344C5.31816 1.20446 3.50694 1.25096 2.37896 2.37894C1.26148 3.49642 1.20523 5.28514 2.23496 6.46711L7.49986 11.7403L12.7648 6.46786C13.7952 5.28514 13.739 3.49867 12.62 2.37744Z"
                  fill="#E0BEA2"
                />
              </svg>
              <span>–≤ –ĺ–Ī—Ä–į–Ĺ–Ķ</span>
            </button>
          </div>
          <div className="card__details-title">
            <span>–ü–ĺ–ī—Ä–ĺ–Ī–ł—Ü—Ė</span>
          </div>
          <div className="card__details">
            <div className="card__description description">
              <div
                className="description__title"
                onClick={() => setDescriptionOpen(!descriptionOpen)}>
                –ě–Ī–ľ—Ė—Ä–ł —ā–į –ĺ–Ņ–ł—Ā
                <svg
                  className={descriptionOpen ? 'active-svg' : 'default-svg'}
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 3.88903L8.88906 -2.8597e-05L10 1.11091L5 6.11091L1.32478e-08 1.11091L1.11094 -2.85042e-05L5 3.88903Z"
                    fill="#E0BEA2"
                  />
                </svg>
              </div>
              <div className={descriptionOpen ? 'open-details' : 'closed-details'}>
                <div className="description__info">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, corporis
                  laudantium nam sit aut placeat facere animi laboriosam doloribus autem.
                </div>
              </div>
              <div className="card__hr"></div>
            </div>
            <div className="card__composition composition">
              <div
                className="composition__title"
                onClick={() => set–°ompositionOpen(!compositionOpen)}>
                –°–ļ–Ľ–į–ī —ā–į –ī–ĺ–≥–Ľ—Ź–ī
                <svg
                  className={compositionOpen ? 'active-svg' : 'default-svg'}
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 3.88903L8.88906 -2.8597e-05L10 1.11091L5 6.11091L1.32478e-08 1.11091L1.11094 -2.85042e-05L5 3.88903Z"
                    fill="#E0BEA2"
                  />
                </svg>
              </div>
              <div className={compositionOpen ? 'open-details' : 'closed-details'}>
                <div className="composition__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit voluptates,
                  sunt impedit voluptatum explicabo odit repellat accusantium repellendus sit
                  distinctio asperiores deserunt corporis molestias ab ratione, vero nobis
                  repudiandae?
                </div>
              </div>
              <div className="card__hr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBlock;
