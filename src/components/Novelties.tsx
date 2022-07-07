import React from 'react';

const Novelties: React.FC = () => {
  return (
    <div className="novelties">
      <div className="container">
        <div className="novelties__title">Узнайте первым о новинках</div>
        <form action="signin" autoComplete="off" method="post" className="novelties__form">
          <input type="text" name="email" placeholder="Ваш e-mail*" />
          <button type="button" className="novelties__button">
            <span>ПОДПИСАТЬСЯ</span>
          </button>
          <p className="novelties__subtitle">
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
            ознакомлен(а) с условиями конфиденциальности.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Novelties;
