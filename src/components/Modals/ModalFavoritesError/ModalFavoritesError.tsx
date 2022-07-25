import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setErrorFavModal } from '../../../redux/favorite/slice';

const ModalFavoritesError: React.FC = () => {
  const dispatch = useDispatch();

  const toggleFavSwitchError = () => {
    dispatch(setErrorFavModal());
  };

  return (
    <div className="modal">
      <div className="modal__bg">
        <div className="modal__top">
          <div className="modal__img">
            <svg width="30" height="30" fill="#f00" viewBox="0 0 1024 1024">
              <path
                stroke="#f00"
                strokeWidth="1"
                d="M513.072 706.272c-28.56 0-52.512 24.48-52.512 53.664 0 29.2 23.952 53.68 52.512 53.68 27.52 0 52.512-24.48 51.248-52.384 1.264-30.704-22.48-54.96-51.248-54.96z M999.136 896.48c32.976-58.176 33.184-127.52 0.416-185.488l-328.944-582.256c-32.56-58.608-91.376-93.376-157.328-93.376s-124.768 34.992-157.328 93.168l-329.376 582.88c-32.768 58.624-32.56 128.384 0.624 186.576 32.768 57.536 91.376 92.096 156.912 92.096h657.056c65.76 0 124.784-34.992 157.968-93.6zM927.712 854.4c-18.272 32.208-50.624 51.312-86.752 51.312h-657.056c-35.712 0-67.84-18.688-85.696-50.24-18.064-31.984-18.272-70.208-0.208-102.4l329.36-582.672c17.856-31.984 49.776-50.88 85.92-50.88 35.92 0 68.048 19.104 85.92 51.088l329.152 582.688c17.632 31.344 17.424 69.12-0.64 101.104z M500.048 329.472c-24.992 7.312-40.544 30.496-40.544 58.624 1.264 16.96 2.304 34.128 3.568 51.088 3.568 64.624 7.136 127.952 10.704 192.576 1.264 21.904 17.856 37.792 39.28 37.792s38.224-16.96 39.28-39.072c0-13.312 0-25.552 1.264-39.088 2.304-41.44 4.832-82.864 7.136-124.304 1.264-26.832 3.568-53.68 4.832-80.512 0-9.664-1.264-18.256-4.832-26.848-10.704-24.016-35.696-36.256-60.688-30.256z"></path>
            </svg>
          </div>
          <div className="modal__title">
            <h1>Помилка</h1>
          </div>
          <div className="modal__body">Товар уже додано до обраного</div>
        </div>
        <div className="modal__buttons button">
          <button className="button__left" onClick={toggleFavSwitchError}>
            <Link to={`/catalog`}>Продовжити покупки</Link>
          </button>
          <button className="button__right" onClick={toggleFavSwitchError}>
            <Link to={`/favorites`}>Перейти до обраного</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFavoritesError;
