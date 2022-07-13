import React from 'react';

import { fetchCategoryItems } from '../redux/category/asyncActions';
import { useAppDispatch } from '../redux/store';

import Slider from './Slider';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();

  const getCategories = async () => {
    dispatch(fetchCategoryItems());
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <h3 className="categories__title">Категорії</h3>
        <div className="categories__carousel carousel">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Categories;

// <button className="carousel__button carousel__button_right">
// <svg
// 	width="14"
// 	height="24"
// 	viewBox="0 0 14 24"
// 	fill="none"
// 	xmlns="http://www.w3.org/2000/svg">
// 	<path
// 		d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
// 		fill="white"
// 	/>
// </svg>
// </button>
