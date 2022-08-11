import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

const OrderBlock: React.FC = () => {
  const { totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <form autoComplete="on" className="order__row" action="" method="post">
      <div className="order__column">
        <h4 className="data__label">Персональні дані:</h4>
        <fieldset className="fieldset">
          <div className="data__column">
            <input
              type="text"
              name="name"
              className="data__input"
              placeholder="Ваше ім'я"
              required
              pattern="[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+"
              title="Поле ім'я може містити лише букви"
            />
            <input
              type="text"
              name="surname"
              className="data__input"
              placeholder="Ваше прізвище"
              required
              pattern="[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+"
              title="Поле прізвище може містити лише букви"
            />
          </div>
          <div className="data__column">
            <input
              type="text"
              pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
              name="email"
              className="data__input"
              placeholder="Ваш e-mail"
              title="Електронна адреса має бути формату example@gmail.com"
              required
            />
            <input
              type="tel"
              name="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="data__input"
              placeholder="Ваш номер телефону"
              inputMode="numeric"
              minLength={12}
              maxLength={12}
              title="Номер телефону має бути формату 000-000-0000"
              required
            />
          </div>
        </fieldset>
        <h4 className="data__label">Спосіб доставки:</h4>
        <div className="data__delivery-type">
          <p>По Україні:</p>
          <p>Міжнародна доставка:</p>
        </div>
        <fieldset className="fieldset">
          <p className="fieldset__item-hidden">По Україні:</p>
          <div className="data__column">
            <label className="fieldset__item">
              <input type="radio" className="data__delivery" name="delivery" required />
              <div className="text">Самовивіз – вул. Велика Васильківська, 14</div>
            </label>
            <label className="fieldset__item">
              <input type="radio" className="data__delivery" name="delivery" />
              <div className="text">Укрпошта / 1-3 тижні / 30$</div>
            </label>
          </div>
          <p className="fieldset__item-hidden">По Україні:</p>
          <div className="data__column">
            <label className="fieldset__item">
              <input type="radio" className="data__delivery" name="delivery" />
              <div className="text">Нова Пошта</div>
            </label>
            <label className="fieldset__item">
              <input type="radio" className="data__delivery" name="delivery" />
              <div className="text"> DHL / 3-7 днів / 60$</div>
            </label>
          </div>
        </fieldset>
        <h4 className="data__label">Адреса доставки:</h4>
        <fieldset className="fieldset">
          <div className="data__column">
            <input
              type="text"
              name="city"
              className="data__input"
              placeholder="Місто"
              pattern="[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+"
              title="Поле місто може містити лише букви"
              required
            />
            <input
              type="number"
              name="department"
              className="data__input"
              placeholder="Відділення пошти"
              title="Це поле може містити лише цифри"
              required
            />
          </div>
        </fieldset>
        <h4 className="data__label">
          Ви можете сплатити покупку одним з нижче перерахованих способів:
        </h4>
        <fieldset className="fieldset">
          <div className="data__column">
            <label className="fieldset__item">
              <input type="radio" className="data__payment" name="payment" required />
              <div className="text">Повна передплата через Приват 24</div>
            </label>
            <label className="fieldset__item">
              <input type="radio" className="data__payment" name="payment" />
              <div className="text"> Грошовим переказом Visa/MasterCard</div>
            </label>
          </div>
          <div className="data__column">
            <label className="fieldset__item">
              <input type="radio" className="data__payment" name="payment" />
              <div className="text"> Накладеним платежем у відділенні Нової Пошти</div>
            </label>
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
      </div>
      <div className="order__column">
        <div className="order__style">
          ДОСТАВКА: <span>За тарифами перевізника</span>
        </div>
        <div className="order__style">
          ПРОМОКОД: <span>0 грн</span>
        </div>
        <div className="order__style">
          ВСЬОГО: <span>{totalPrice} грн</span>
        </div>
        <button className="order__button" type="submit" formMethod="post">
          <span>ОФОРМИТИ ЗАМОВЛЕННЯ</span>
        </button>
        <div className="order__politics">
          Натискаючи на кнопку «оплатити замовлення», я приймаю умови публічної оферти та політики
          конфіденційності
        </div>
      </div>
    </form>
  );
};

export default OrderBlock;
