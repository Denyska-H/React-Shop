import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { CartEmpty, CartItem, Footer, Header, OrderBlock } from '../components';

const Cart: React.FC = () => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  const isMountedCart = React.useRef(false);

  React.useEffect(() => {
    if (isMountedCart.current) {
      const dataCart = JSON.stringify(items);
      localStorage.setItem('cart', dataCart);
    }
    isMountedCart.current = true;
  }, [items]);

  return (
    <>
      <Header />
      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <section className="cart">
            <div className="container">
              <div className="cart__title">Ваше замовлення</div>
              <div className="cart__orders">
                {items.map((item) => (
                  <CartItem key={item.newId} {...item} />
                ))}
              </div>
              <div className="cart__fullsum">
                <span>До сплати:</span> {totalPrice} грн
              </div>
            </div>
          </section>
          <section className="order">
            <div className="container">
              <h3 className="order__title">Оформлення замовлення</h3>
              <OrderBlock />
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
};

export default Cart;
