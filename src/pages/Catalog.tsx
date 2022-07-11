import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CatalogBlock from '../components/CatalogBlock';
import CatalogCategories from '../components/CatalogCategories';
import Skeleton from '../components/CatalogBlock/Skeleton';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchItems } from '../redux/catalog/slice';
import { setCategoryId } from '../redux/filter/slice';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const { status, items } = useSelector((state: RootState) => state.catalog);
  const { categoryId } = useSelector((state: RootState) => state.filters);

  const clothes = items.map((obj) => <CatalogBlock key={obj.id} {...obj} />);
  const skeleton = [...Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);

  const getClothes = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      fetchItems({
        category,
      }),
    );
  };

  const onClickChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    getClothes();
  }, [categoryId]);

  return (
    <>
      <Header />
      <section className="catalog">
        <div className="container">
          <h3 className="catalog__title">Каталог</h3>
          <div className="catalog__filter-items">
            <div className="catalog__filter-item">
              <CatalogCategories
                category={categoryId}
                onClickChangeCategory={onClickChangeCategory}
              />
            </div>
            <div className="catalog__filter-item">
              <div className="catalog__search">
                <input type="text" placeholder="Введіть ваш запит" />
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757V17.0757Z"
                    fill="#252525"
                  />
                </svg>
              </div>
              <div className="catalog__filter">
                Сортувати за
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z"
                    fill="#E0BEA2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="catalog__items">
            <div className="catalog__item item">{status === 'pending' ? skeleton : clothes}</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Catalog;
