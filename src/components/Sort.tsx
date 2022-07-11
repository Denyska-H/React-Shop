import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';
import { SortPropertyEnum, SortType } from '../redux/filter/types';

type List = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortProps = {
  value: SortType;
};

export const list: List[] = [
  {
    name: 'популярністю',
    sortProperty: SortPropertyEnum.RATING,
  },
  {
    name: 'ціною (зростання)',
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: 'ціною (падіння)',
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  {
    name: 'алфавітом',
    sortProperty: SortPropertyEnum.TITLE,
  },
];

const Sort: React.FC<SortProps> = ({ value }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const clickOnPopUpItem = (obj: List) => {
    dispatch(setSort(obj));
    setVisible(false);
  };

  return (
    <div className="catalog__filter" onClick={() => setVisible(!visible)}>
      Сортувати за
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z"
          fill="#E0BEA2"
        />
      </svg>
      {visible && (
        <div className="catalog__popup popup">
          <ul className="popup__items">
            {list.map((obj, i) => (
              <li
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                onClick={() => clickOnPopUpItem(obj)}
                key={i}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
