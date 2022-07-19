import React from 'react';
import { useSelector } from 'react-redux';

import { CartItem, Footer, Header } from '../components';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Header />
      <section className="cart">
        <div className="container">
          <div className="cart__title">Ваше замовлення</div>
          <div className="cart__orders">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
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
          <div className="order__row">
            <div className="order__column">
              <form autoComplete="on" className="data">
                <h4 className="data__label">Персональні дані:</h4>
                <fieldset className="fieldset">
                  <div className="data__column">
                    <input
                      type="text"
                      name="name"
                      className="data__input"
                      placeholder="Ваше ім'я"
                    />
                    <input
                      type="text"
                      name="surname"
                      className="data__input"
                      placeholder="Ваше прізвище"
                    />
                  </div>
                  <div className="data__column">
                    <input
                      type="email"
                      name="email"
                      className="data__input"
                      placeholder="Ваш e-mail"
                    />
                    <input
                      type="tel"
                      name="tel"
                      className="data__input"
                      placeholder="Ваш номер телефону"
                    />
                  </div>
                </fieldset>
                <h4 className="data__label">Спосіб доставки:</h4>
                <div className="data__delivery-type">
                  <p>По Україні:</p>
                  <p>Міжнародна доставка:</p>
                </div>
                <fieldset className="fieldset">
                  <div className="data__column">
                    <div className="fieldset__item">
                      <input type="radio" className="data__delivery" name="delivery" />
                      <div className="text">Самовивіз – вул. Велика Васильківська, 14</div>
                    </div>
                    <div className="fieldset__item">
                      <input type="radio" className="data__delivery" name="delivery" />
                      <div className="text">Укрпошта / 1-3 тижні / 30$</div>
                    </div>
                  </div>
                  <div className="data__column">
                    <div className="fieldset__item">
                      <input type="radio" className="data__delivery" name="delivery" />
                      <div className="text">Нова Пошта</div>
                    </div>
                    <div className="fieldset__item">
                      <input type="radio" className="data__delivery" name="delivery" />
                      <div className="text"> DHL / 3-7 днів / 60$</div>
                    </div>
                  </div>
                </fieldset>
                <h4 className="data__label">Адреса доставки:</h4>
                <fieldset className="fieldset">
                  <div className="data__column">
                    <input type="text" name="city" className="data__input" placeholder="Місто" />
                    <input
                      type="text"
                      name="department"
                      className="data__input"
                      placeholder="Відділення пошти"
                    />
                  </div>
                </fieldset>
                <h4 className="data__label">
                  Ви можете сплатити покупку одним з нижче перерахованих способів:
                </h4>
                <fieldset className="fieldset">
                  <div className="data__column">
                    <div className="fieldset__item">
                      <input type="radio" className="data__payment" name="payment" />
                      <div className="text">Повна передплата через Приват 24</div>
                    </div>
                    <div className="fieldset__item">
                      <input type="radio" className="data__payment" name="payment" />
                      <div className="text"> Грошовим переказом Visa/MasterCard</div>
                    </div>
                  </div>
                  <div className="data__column">
                    <div className="fieldset__item">
                      <input type="radio" className="data__payment" name="payment" />
                      <div className="text"> Накладеним платежем у відділенні Нової Пошти</div>
                    </div>
                  </div>
                </fieldset>
                <h4 className="data__label">Промокоди:</h4>
                <fieldset className="fieldset">
                  <div className="data__column">
                    <input
                      type="text"
                      name="bonus"
                      className="data__input"
                      placeholder="Введіть промокод"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="order__column">
              <div className="order__style">
                ДОСТАВКА: <span>За тарифами перевізника</span>
              </div>
              <div className="order__style">
                ПРОМОКОД: <span>-69 грн</span>
              </div>
              <div className="order__style">
                ВСЬОГО: <span>15250 грн</span>
              </div>
              <button className="order__button">
                <span>ОФОРМИТИ ЗАМОВЛЕННЯ</span>
              </button>
              <div className="order__politics">
                Натискаючи на кнопку «оплатити замовлення», я приймаю умови публічної оферти та
                політики конфіденційності
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
