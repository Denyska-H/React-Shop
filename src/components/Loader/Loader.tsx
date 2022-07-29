import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <img src={require('../../assets/img/preloader.gif')} alt="" />
      </div>
    </div>
  );
};

export default Loader;
