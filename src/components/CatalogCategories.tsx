import React from 'react';

type CatalogCategoriesProps = {
  category: number;
  onClickChangeCategory: (index: number) => void;
};

const categories = ['Усі', 'Куртки', 'Костюми', 'Пальта', 'Парки', 'Плащі', 'Шуби'];

const CatalogCategories: React.FC<CatalogCategoriesProps> = ({
  category,
  onClickChangeCategory,
}) => {
  return (
    <div className="catalog__categories">
      <ul className="catalog__category">
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickChangeCategory(index)}
            className={category === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogCategories;
