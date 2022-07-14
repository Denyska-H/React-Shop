import React from 'react';

import { Footer, Fullscreen, HomeCategories, Novelties } from '../components';

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
