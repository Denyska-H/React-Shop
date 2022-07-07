import React from 'react';

import Categories from '../components/Categories';
import Fullscreen from '../components/Fullscreen';

const Home: React.FC = () => {
  return (
    <>
      <Fullscreen />
      <Categories />
    </>
  );
};

export default Home;
