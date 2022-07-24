import React from 'react';
import { Link } from 'react-router-dom';

type HomeCategoriesBlockProps = {
  categoryImage: string;
  categoryName: string;
};

const HomeCategoriesBlock: React.FC<HomeCategoriesBlockProps> = ({
  categoryImage,
  categoryName,
}) => {
  return (
    <div className="carousel__row">
      <div className="carousel__column">
        <div className="carousel__img">
          <Link to={'/catalog'}>
            <img src={categoryImage} alt="category" />
          </Link>
          <div className="carousel__text">
            <div className="carousel__name">{categoryName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoriesBlock;
