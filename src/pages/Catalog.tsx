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
