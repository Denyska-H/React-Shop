import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSuccessFavModal } from '../../../redux/favorite/slice';

const ModalFavorites: React.FC = () => {
  const dispatch = useDispatch();

  const toggleFavSwitchOk = () => {
    dispatch(setSuccessFavModal());
  };

  return (
    <div className="modal">
      <div className="modal__bg">
        <div className="modal__top">
          <div className="modal__img">
            <svg width="30" height="30" fill="#009f16" viewBox="0 0 1024 1024">
              <path
                stroke="#009f16"
                strokeWidth="1"
                d="M512-1.328c-282.336 0-512 229.648-512 512 0 282.32 229.664 512 512 512s512-229.712 512-512c0-282.304-229.664-512-512-512zM512 943.36c-238.544 0-432.688-194.096-432.688-432.688s194.144-432.688 432.688-432.688c238.592 0 432.688 194.080 432.688 432.672 0 238.608-194.144 432.704-432.688 432.704z M746.912 332.592c-16.144-14.672-41.248-13.52-56 2.704l-241.92 266.4-116.88-118.832c-15.424-15.632-40.496-15.856-56.080-0.48-15.632 15.36-15.856 40.448-0.48 56.080l146.304 148.72c7.488 7.616 17.648 11.872 28.272 11.872 0.24 0 0.512 0 0.752 0.032 10.944-0.24 21.264-4.928 28.592-13.024l270.128-297.424c14.72-16.256 13.52-41.328-2.688-56.048z"></path>
            </svg>
          </div>
          <div className="modal__title">
            <h1>Виконано</h1>
          </div>
          <div className="modal__body">Товар успішно додано до обраного</div>
        </div>
        <div className="modal__buttons button">
          <button className="button__left" onClick={toggleFavSwitchOk}>
            <Link to={`/catalog`}>Продовжити покупки</Link>
          </button>
          <button className="button__right" onClick={toggleFavSwitchOk}>
            <Link to={`/favorites`}>Перейти до обраного</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFavorites;
