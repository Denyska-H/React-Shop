import React from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { RootState, useAppDispatch } from '../redux/store';
import { setCategoryId, setCurrentPage, setSearchValue } from '../redux/filter/slice';
import { fetchCatalogItems } from '../redux/catalog/asyncActions';
import {
  CatalogBlock,
  CatalogCategories,
  Footer,
  Header,
  ModalFavorites,
  ModalFavoritesError,
  NotFound,
  Pagination,
  Skeleton,
  Sort,
} from '../components';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const { status, items } = useSelector((state: RootState) => state.catalog);
  const { errorFavModal, successFavModal } = useSelector((state: RootState) => state.favorite);
  const { categoryId, searchValue, sort, currentPage } = useSelector(
    (state: RootState) => state.filters,
  );

  const sortCondition = sort.sortProperty;

  const [value, setValue] = React.useState<string>('');

  const getClothes = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const sortBy = sortCondition.replace('-', '');
    const order = sortCondition.includes('-') ? 'desc' : 'asc';

    dispatch(
      fetchCatalogItems({
        category,
        search,
        sortBy,
        order,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getClothes();
  }, [categoryId, searchValue, sortCondition, currentPage]);

  const clothes = items.map((obj) => <CatalogBlock key={obj.id} {...obj} />);
  const skeleton = [...Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);

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
                <input
                  value={value}
                  onChange={onChangeInput}
                  type="text"
                  placeholder="Введіть ваш запит"
                />
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
              <Sort value={sort} />
            </div>
          </div>
          <div className="catalog__items">
            {clothes.length === 0 ? (
              <div className="catalog__item item">
                {status === 'pending' ? skeleton : <NotFound />}
              </div>
            ) : (
              <div className="catalog__item item">{clothes}</div>
            )}
          </div>
          <Pagination onClickPageChange={onChangeCurrentPage} />
        </div>
      </section>
      {successFavModal && <ModalFavorites />}
      {errorFavModal && <ModalFavoritesError />}
      <Footer />
    </>
  );
};

export default Catalog;
