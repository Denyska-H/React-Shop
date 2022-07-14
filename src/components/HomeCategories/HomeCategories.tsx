import React from 'react';

import { fetchCategoryItems } from '../../redux/category/asyncActions';
import { useAppDispatch } from '../../redux/store';

import { Slider } from '../Slider';

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
        <Slider />
      </div>
    </div>
  );
};

export default Categories;
