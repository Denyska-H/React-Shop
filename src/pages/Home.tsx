import React from 'react';

import HomeCategories from '../components/HomeCategories';
import Footer from '../components/Footer';
import Fullscreen from '../components/Fullscreen';
import Novelties from '../components/Novelties';

const Home: React.FC = () => {
  return (
    <>
      <Fullscreen />
      <section className="home">
        <HomeCategories />
        <Novelties />
      </section>
      <Footer />
    </>
  );
};

export default Home;
