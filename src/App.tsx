import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import ProductCard from './pages/ProductCard';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
