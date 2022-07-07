import React from 'react';

import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Fullscreen from '../components/Fullscreen';
import Novelties from '../components/Novelties';

const Home: React.FC = () => {
  return (
    <>
      <Fullscreen />
      <section className="home">
        <Categories />
        <Novelties />
      </section>
      <Footer />
    </>
  );
};

export default Home;
