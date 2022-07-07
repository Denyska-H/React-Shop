import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
