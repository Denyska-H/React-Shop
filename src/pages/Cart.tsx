import React from 'react';

import { Footer, Header } from '../components';

import jacket from '../assets/img/jacket.png';

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <section className="cart">
        <div className="container">
          <div className="cart__title">Ваше замовлення</div>
          <div className="cart__orders">
            <div className="cart__order">
              <div className="cart__item">
                <div className="cart__img">
                  <img src={jacket} alt="" />
                </div>
                <div className="cart__name">Синя парка</div>
              </div>
              <div className="cart__sizes">
                <div className="cart__size">
                  L
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 3.88903L8.88906 -3.05043e-05L10 1.11091L5 6.1109L1.32478e-08 1.11091L1.11094 -3.04116e-05L5 3.88903Z"
                      fill="#E0BEA2"
                    />
                  </svg>
                </div>
              </div>
              <div className="cart__amount">
                <div className="cart__minus">
                  <svg
                    width="10"
                    height="2"
                    viewBox="0 0 10 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 0.285706H5.71429H4.28571H0V1.71428H4.28571H5.71429H10V0.285706Z"
                      fill="#E0BEA2"
                    />
                  </svg>
                </div>
                <div className="cart__number">3</div>
                <div className="cart__plus">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z"
                      fill="#E0BEA2"
                    />
                  </svg>
                </div>
              </div>
              <div className="cart__price">
                <div className="cart__sum">9450 грн</div>
                <button className="cart__trashbin">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z"
                      fill="#E0BEA2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="cart__hr"></div>
          </div>
          <div className="cart__fullsum">
            <span>До сплати:</span> 15250 грн
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
