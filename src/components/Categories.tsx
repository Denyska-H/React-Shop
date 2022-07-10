import React from 'react';

import CategoriesBlock from './CategoriesBlock';

const Categories: React.FC = () => {
  return (
    <div className="categories">
      <div className="container">
        <h3 className="categories__title">Категорії</h3>
        <div className="categories__carousel carousel">
          <div className="carousel__row">
            <CategoriesBlock imageUrl={''} category={''} />
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
    </div>
  );
};

export default Categories;
