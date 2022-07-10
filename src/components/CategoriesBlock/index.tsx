import React from 'react';

import jacket from '../../assets/img/jacket.png';

type CategoriesBlockProps = {
  imageUrl: string;
  category: string;
};

const CategoriesBlock: React.FC<CategoriesBlockProps> = ({ imageUrl, category }) => {
  return (
    <div className="carousel__column">
      <div className="carousel__img">
        <img src={jacket} alt="category" />
        <div className="carousel__text">
          <div className="carousel__name">category</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlock;
