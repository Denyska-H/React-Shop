import React from 'react';

import jacket from '../../assets/img/jacket.png';

type HomeCategoriesBlockProps = {
  imageUrl: string;
  category: string;
};

const HomeCategoriesBlock: React.FC<HomeCategoriesBlockProps> = ({ imageUrl, category }) => {
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

export default HomeCategoriesBlock;
