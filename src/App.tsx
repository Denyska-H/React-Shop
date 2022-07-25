import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import ProductCard from './pages/ProductCard';
import Cart from './pages/Cart';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Refund from './pages/Refund';
import Delivery from './pages/Delivery';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
