import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const { favorites } = useSelector((state: RootState) => state.favorite);

  const totalCartAmount = items.reduce((sum, item) => item.count + sum, 0);
  const totalFavoritesAmount = favorites.reduce((sum, item) => item.count + sum, 0);

  const [isMobile, setIsMobile] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header className={screenWidth > 992 || !isMobile ? 'header' : 'header_m'}>
      <div className="container">
        <button
          className="mobile-menu-icon mobile-menu-icon_new"
          aria-label="mobileMenu"
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
        <nav className="header__menu menu">
          <ul className={screenWidth > 992 || !isMobile ? 'menu__list' : 'menu__list_mobile'}>
            <li className="menu__link menu__link_color">
              <Link to="/catalog">КАТАЛОГ</Link>
            </li>
            <div className="hr"></div>
            <li className="menu__link menu__link_color">
              <Link to="/about">ПРО НАС</Link>
            </li>
            <div className="hr"></div>
            <li className="menu__link menu__link_color">
              <Link to="/delivery">ДОСТАВКА</Link>
            </li>
            <div className="hr"></div>
            <li className="menu__link menu__link_m">
              <Link to="/favorites">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.501 2.16119C15.4372 -0.475012 19.9746 -0.387513 22.8033 2.44618C25.6308 5.28113 25.7283 9.79605 23.0983 12.741L12.4985 23.3558L1.90122 12.741C-0.728729 9.79605 -0.62998 5.27363 2.19622 2.44618C5.02741 -0.383763 9.55608 -0.478762 12.501 2.16119ZM21.0334 4.2124C19.1584 2.33494 16.1335 2.25869 14.171 4.02115L12.5023 5.51863L10.8323 4.0224C8.86359 2.25744 5.8449 2.33494 3.96493 4.2149C2.10247 6.07737 2.00872 9.05856 3.72494 11.0285L12.4998 19.8171L21.2746 11.0298C22.9921 9.05856 22.8983 6.08112 21.0334 4.2124Z"
                    fill="white"
                  />
                </svg>
                <p
                  className={totalFavoritesAmount === 0 ? 'menu__counter hidden' : 'menu__counter'}>
                  {totalFavoritesAmount}
                </p>
              </Link>
            </li>
            <div className="hr"></div>
            <li className="menu__link menu__link_m">
              <Link to="/cart">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z"
                    fill="white"
                  />
                </svg>
                <p className={totalCartAmount === 0 ? 'menu__counter hidden' : 'menu__counter'}>
                  {totalCartAmount}
                </p>
              </Link>
            </li>
            <div className="hr"></div>
            <li className="menu__link menu__link_m">
              <Link to="/contacts">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 22.5C15.1522 22.5 17.6957 21.4464 19.5711 19.5711C21.4464 17.6957 22.5 15.1522 22.5 12.5C22.5 9.84783 21.4464 7.3043 19.5711 5.42893C17.6957 3.55357 15.1522 2.5 12.5 2.5C9.84783 2.5 7.3043 3.55357 5.42893 5.42893C3.55357 7.3043 2.5 9.84783 2.5 12.5C2.5 15.1522 3.55357 17.6957 5.42893 19.5711C7.3043 21.4464 9.84783 22.5 12.5 22.5ZM12.5 25C5.59625 25 0 19.4037 0 12.5C0 5.59625 5.59625 0 12.5 0C19.4037 0 25 5.59625 25 12.5C25 19.4037 19.4037 25 12.5 25ZM8.6125 13.9625L5.49 12.9887C4.815 12.7825 4.81125 12.3175 5.64125 11.9837L17.8075 7.28375C18.5137 6.99625 18.9137 7.36 18.685 8.27125L16.6137 18.0462C16.4688 18.7425 16.05 18.9088 15.4687 18.5875L12.28 16.2275L10.7937 17.6625C10.6412 17.81 10.5175 17.9363 10.2825 17.9675C10.0487 18 9.85625 17.93 9.715 17.5425L8.6275 13.9537L8.6125 13.9625Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <div className="hr"></div>
          </ul>
          <ul className="menu__list">
            <li className="menu__link menu__link_color">
              <Link to="/favorites" aria-label="favorites">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.501 2.16119C15.4372 -0.475012 19.9746 -0.387513 22.8033 2.44618C25.6308 5.28113 25.7283 9.79605 23.0983 12.741L12.4985 23.3558L1.90122 12.741C-0.728729 9.79605 -0.62998 5.27363 2.19622 2.44618C5.02741 -0.383763 9.55608 -0.478762 12.501 2.16119ZM21.0334 4.2124C19.1584 2.33494 16.1335 2.25869 14.171 4.02115L12.5023 5.51863L10.8323 4.0224C8.86359 2.25744 5.8449 2.33494 3.96493 4.2149C2.10247 6.07737 2.00872 9.05856 3.72494 11.0285L12.4998 19.8171L21.2746 11.0298C22.9921 9.05856 22.8983 6.08112 21.0334 4.2124Z"
                    fill="white"
                  />
                </svg>
                <p
                  className={totalFavoritesAmount === 0 ? 'menu__counter hidden' : 'menu__counter'}>
                  {totalFavoritesAmount}
                </p>
              </Link>
            </li>
            <li className="menu__link menu__link_color">
              <Link to="/cart" aria-label="cart">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z"
                    fill="white"
                  />
                </svg>
                <p className={totalCartAmount === 0 ? 'menu__counter hidden' : 'menu__counter'}>
                  {totalCartAmount}
                </p>
              </Link>
            </li>
            <li className="menu__link menu__link_color">
              <Link to="/contacts" aria-label="contacts">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 22.5C15.1522 22.5 17.6957 21.4464 19.5711 19.5711C21.4464 17.6957 22.5 15.1522 22.5 12.5C22.5 9.84783 21.4464 7.3043 19.5711 5.42893C17.6957 3.55357 15.1522 2.5 12.5 2.5C9.84783 2.5 7.3043 3.55357 5.42893 5.42893C3.55357 7.3043 2.5 9.84783 2.5 12.5C2.5 15.1522 3.55357 17.6957 5.42893 19.5711C7.3043 21.4464 9.84783 22.5 12.5 22.5ZM12.5 25C5.59625 25 0 19.4037 0 12.5C0 5.59625 5.59625 0 12.5 0C19.4037 0 25 5.59625 25 12.5C25 19.4037 19.4037 25 12.5 25ZM8.6125 13.9625L5.49 12.9887C4.815 12.7825 4.81125 12.3175 5.64125 11.9837L17.8075 7.28375C18.5137 6.99625 18.9137 7.36 18.685 8.27125L16.6137 18.0462C16.4688 18.7425 16.05 18.9088 15.4687 18.5875L12.28 16.2275L10.7937 17.6625C10.6412 17.81 10.5175 17.9363 10.2825 17.9675C10.0487 18 9.85625 17.93 9.715 17.5425L8.6275 13.9537L8.6125 13.9625Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__logo_yanki">
          <Link to={'/'}>
            <span>YANKI</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
