import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__title">КОМПАНІЯ</div>
            <ul className="footer__text">
              <li>Про нас</li>
              <li>Контакти</li>
            </ul>
          </div>
          <div className="footer__column">
            <div className="footer__title">КОРИСНЕ</div>
            <ul className="footer__text">
              <li>Оплата та доставка</li>
              <li>Умови повернення</li>
              <li>Бонусна система</li>
            </ul>
          </div>
          <div className="footer__column">
            <div className="footer__title">ПОКУПЦЮ</div>
            <ul className="footer__text">
              <li>Обране</li>
              <li>Публічна оферта</li>
              <li>Політика конфіденційності</li>
            </ul>
          </div>
          <div className="footer__column">
            <div className="footer__title">КОНТАКТИ</div>
            <ul className="footer__text">
              <li>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.49992 6.12504C7.87003 6.12504 7.26594 6.37526 6.82054 6.82066C6.37514 7.26606 6.12492 7.87015 6.12492 8.50004C6.12492 9.12993 6.37514 9.73402 6.82054 10.1794C7.26594 10.6248 7.87003 10.875 8.49992 10.875C9.12981 10.875 9.7339 10.6248 10.1793 10.1794C10.6247 9.73402 10.8749 9.12993 10.8749 8.50004C10.8749 7.87015 10.6247 7.26606 10.1793 6.82066C9.7339 6.37526 9.12981 6.12504 8.49992 6.12504ZM8.49992 4.54171C9.54974 4.54171 10.5566 4.95875 11.2989 5.70108C12.0412 6.44341 12.4583 7.45023 12.4583 8.50004C12.4583 9.54986 12.0412 10.5567 11.2989 11.299C10.5566 12.0413 9.54974 12.4584 8.49992 12.4584C7.4501 12.4584 6.44329 12.0413 5.70095 11.299C4.95862 10.5567 4.54159 9.54986 4.54159 8.50004C4.54159 7.45023 4.95862 6.44341 5.70095 5.70108C6.44329 4.95875 7.4501 4.54171 8.49992 4.54171ZM13.6458 4.34379C13.6458 4.60625 13.5415 4.85795 13.3559 5.04353C13.1703 5.22912 12.9186 5.33337 12.6562 5.33337C12.3937 5.33337 12.142 5.22912 11.9564 5.04353C11.7708 4.85795 11.6666 4.60625 11.6666 4.34379C11.6666 4.08134 11.7708 3.82963 11.9564 3.64405C12.142 3.45847 12.3937 3.35421 12.6562 3.35421C12.9186 3.35421 13.1703 3.45847 13.3559 3.64405C13.5415 3.82963 13.6458 4.08134 13.6458 4.34379ZM8.49992 2.16671C6.54134 2.16671 6.2215 2.17225 5.31029 2.21262C4.68963 2.24192 4.27321 2.32504 3.88688 2.47546C3.54329 2.60846 3.2955 2.76758 3.03188 3.032C2.78409 3.2714 2.59357 3.56367 2.47454 3.887C2.32413 4.27492 2.241 4.69054 2.2125 5.31042C2.17134 6.18442 2.16659 6.49 2.16659 8.50004C2.16659 10.4586 2.17213 10.7785 2.2125 11.6897C2.24179 12.3095 2.32492 12.7268 2.47454 13.1123C2.60913 13.4567 2.76746 13.7045 3.03029 13.9673C3.29709 14.2333 3.54488 14.3924 3.88529 14.5238C4.27638 14.675 4.69279 14.759 5.31029 14.7875C6.18429 14.8286 6.48988 14.8334 8.49992 14.8334C10.4585 14.8334 10.7783 14.8278 11.6895 14.7875C12.3086 14.7582 12.7258 14.675 13.1122 14.5254C13.455 14.3916 13.7043 14.2325 13.9672 13.9697C14.234 13.7029 14.3931 13.4551 14.5245 13.1147C14.6749 12.7244 14.7588 12.3072 14.7873 11.6897C14.8285 10.8157 14.8333 10.5101 14.8333 8.50004C14.8333 6.54146 14.8277 6.22162 14.7873 5.31042C14.758 4.69133 14.6749 4.27333 14.5245 3.887C14.4052 3.564 14.215 3.27184 13.968 3.032C13.7287 2.78409 13.4364 2.59355 13.113 2.47467C12.725 2.32425 12.3086 2.24112 11.6895 2.21262C10.8155 2.17146 10.51 2.16671 8.49992 2.16671ZM8.49992 0.583374C10.6509 0.583374 10.9193 0.591291 11.7632 0.630874C12.6063 0.670457 13.1803 0.802666 13.6853 0.998999C14.2078 1.20008 14.648 1.47242 15.0882 1.91179C15.4907 2.30754 15.8022 2.78626 16.001 3.31462C16.1965 3.81892 16.3295 4.39367 16.3691 5.23679C16.4063 6.08071 16.4166 6.34908 16.4166 8.50004C16.4166 10.651 16.4087 10.9194 16.3691 11.7633C16.3295 12.6064 16.1965 13.1804 16.001 13.6855C15.8028 14.2141 15.4912 14.6929 15.0882 15.0883C14.6923 15.4907 14.2136 15.8022 13.6853 16.0011C13.181 16.1966 12.6063 16.3296 11.7632 16.3692C10.9193 16.4064 10.6509 16.4167 8.49992 16.4167C6.34896 16.4167 6.08059 16.4088 5.23667 16.3692C4.39354 16.3296 3.81959 16.1966 3.3145 16.0011C2.78593 15.8028 2.30713 15.4912 1.91167 15.0883C1.50903 14.6926 1.19753 14.2139 0.998877 13.6855C0.802544 13.1812 0.670335 12.6064 0.630752 11.7633C0.593544 10.9194 0.583252 10.651 0.583252 8.50004C0.583252 6.34908 0.591169 6.08071 0.630752 5.23679C0.670335 4.39287 0.802544 3.81971 0.998877 3.31462C1.19698 2.78593 1.50855 2.30709 1.91167 1.91179C2.30724 1.50902 2.78601 1.19749 3.3145 0.998999C3.81959 0.802666 4.39275 0.670457 5.23667 0.630874C6.08059 0.593666 6.34896 0.583374 8.49992 0.583374Z"
                    fill="#E0BEA2"
                  />
                </svg>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.49992 14.8334C10.1796 14.8334 11.7905 14.1661 12.9783 12.9784C14.166 11.7907 14.8333 10.1797 14.8333 8.50004C14.8333 6.82034 14.166 5.20943 12.9783 4.0217C11.7905 2.83397 10.1796 2.16671 8.49992 2.16671C6.82021 2.16671 5.20931 2.83397 4.02158 4.0217C2.83385 5.20943 2.16659 6.82034 2.16659 8.50004C2.16659 10.1797 2.83385 11.7907 4.02158 12.9784C5.20931 14.1661 6.82021 14.8334 8.49992 14.8334ZM8.49992 16.4167C4.12754 16.4167 0.583252 12.8724 0.583252 8.50004C0.583252 4.12767 4.12754 0.583374 8.49992 0.583374C12.8723 0.583374 16.4166 4.12767 16.4166 8.50004C16.4166 12.8724 12.8723 16.4167 8.49992 16.4167ZM6.03784 9.42629L4.06025 8.80958C3.63275 8.67896 3.63038 8.38446 4.15604 8.17308L11.8613 5.19642C12.3086 5.01433 12.562 5.24471 12.4171 5.82183L11.1053 12.0127C11.0135 12.4536 10.7483 12.5589 10.3801 12.3555L8.36059 10.8608L7.41929 11.7696C7.32271 11.863 7.24434 11.943 7.0955 11.9628C6.94746 11.9834 6.82554 11.939 6.73609 11.6936L6.04734 9.42075L6.03784 9.42629Z"
                    fill="#E0BEA2"
                  />
                </svg>
              </li>
              <li>+38(073) 096 36 44</li>
              <li>info@yanki.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom-text">©️ 2021 Yanki. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
