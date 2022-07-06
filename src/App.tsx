import React from 'react';

import Fullscreen from './components/Fullscreen';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Fullscreen />
      </div>
    </>
  );
};

export default App;
