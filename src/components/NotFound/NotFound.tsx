import React from 'react';

import styles from './NotFound.module.scss';
import notFound from '../../assets/img/notFound.png';

const NotFound: React.FC = () => {
  return (
    <>
      <div className={styles.notFound}>
        <div className="container">
          <img src={notFound} alt="notFound" />
          <p>
            Приносимо вибачення
            <br />
            За вашим запитом нічого не знайдено
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
