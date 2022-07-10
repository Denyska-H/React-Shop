import React from 'react';

const Novelties: React.FC = () => {
  return (
    <div className="novelties">
      <div className="container">
        <div className="novelties__title">Дізнайтесь першими про новинки</div>
        <form action="signin" autoComplete="off" method="post" className="novelties__form">
          <input type="text" name="email" placeholder="Ваш e-mail*" />
          <button type="button" className="novelties__button">
            <span>ПІДПИСАТИСЯ</span>
          </button>
          <p className="novelties__subtitle">
            Натискаючи на кнопку «Підписатися», я погоджуюсь на обробку моїх персональних даних та
            ознайомлений(а) з умовами конфіденційності.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Novelties;
