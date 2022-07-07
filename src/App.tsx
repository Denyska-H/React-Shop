import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
