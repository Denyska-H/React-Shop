import React from 'react';

import jacket from '../assets/img/jacket.png';
import coat from '../assets/img/coat.png';
import furCoat from '../assets/img/fur-coat.png';
import parka from '../assets/img/parka.png';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="container">
        <h3 className="categories__title">Категории</h3>
        <div className="categories__carousel carousel">
          <div className="carousel__row">
            <div className="carousel__column">
              <div className="carousel__img">
                <img src={jacket} alt="photo" />
                <div className="carousel__text">
                  <div className="carousel__name">Куртки</div>
                </div>
              </div>
            </div>
            <div className="carousel__column">
              <div className="carousel__img">
                <img src={coat} alt="photo" />
                <div className="carousel__text">
                  <div className="carousel__name">Пальто</div>
                </div>
              </div>
            </div>
            <div className="carousel__column">
              <div className="carousel__img">
                <img src={furCoat} alt="photo" />
                <div className="carousel__text">
                  <div className="carousel__name">Шубы</div>
                </div>
              </div>
            </div>
            <div className="carousel__column">
              <div className="carousel__img">
                <img src={parka} alt="photo" />
                <div className="carousel__text">
                  <div className="carousel__name">Парки</div>
                </div>
              </div>
            </div>
            <button type="button" className="carousel__button">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
