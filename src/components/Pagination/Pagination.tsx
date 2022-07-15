import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  onClickPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ onClickPageChange }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      nextLabel={
        <svg
          width="50"
          height="24"
          viewBox="0 0 50 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.39339C38.9289 0.807608 37.9792 0.807608 37.3934 1.3934C36.8076 1.97918 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM1.31134e-07 13.5L48 13.5L48 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
            fill="black"
          />
        </svg>
      }
      previousLabel={
        <svg
          width="50"
          height="24"
          viewBox="0 0 50 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.939342 10.9393C0.353554 11.5251 0.353554 12.4749 0.939342 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939342 10.9393ZM50 10.5L2 10.5V13.5L50 13.5V10.5Z"
            fill="black"
          />
        </svg>
      }
      onPageChange={(event) => onClickPageChange(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={3}
    />
  );
};

export default Pagination;
