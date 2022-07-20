import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart__empty">
        <div className="container">
          <h2>Кошик пустий</h2>
          <img src={emptyCart} alt="Empty cart" />
          <p>
            Скоріше за все, ви ще нічого не додали до кошику.
            <br />
            Для того, щоб це зробити, перейдіть до каталогу.
          </p>
          <Link to="/catalog" className="cart__button-back">
            <span>Перейти до каталогу</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
