import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { Footer, Header } from '../components';

type ProductProps = {
  imageUrl: string;
  title: string;
  price: number;
};

const ProductCard: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<ProductProps>();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://62c6de9974e1381c0a6b2e65.mockapi.io/items/${id}`);
        setProduct(data);
      } catch (error) {
        alert('Помилка при отриманні інформації про картку!');
        navigate('/');
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <>
      <Header />
      <section className="card">
        <div className="container">
          <div className="card__row">
            <div className="card__column">
              <div className="card__img">
                <img src={product.imageUrl} alt="" />
              </div>
            </div>
            <div className="card__column">
              <div className="card__title">{product.title}</div>
              <div className="card__price">{product.price} грн</div>
              <div className="card__sizes">
                <div className="card__size">Оберіть розмір</div>
                <div className="card__arrow">
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
              <div className="card__buttons">
                <button className="card__cart-button">
                  <span>у кошик</span>
                </button>
                <button className="card__favorite-button">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.50061 1.14671C9.26233 -0.435007 11.9848 -0.382508 13.682 1.31771C15.3785 3.01868 15.437 5.72763 13.859 7.49459L7.49911 13.8635L1.14073 7.49459C-0.437237 5.72763 -0.377988 3.01418 1.31773 1.31771C3.01645 -0.380258 5.73365 -0.437257 7.50061 1.14671ZM12.62 2.37744C11.495 1.25096 9.68007 1.20521 8.50259 2.26269L7.50136 3.16118L6.49938 2.26344C5.31816 1.20446 3.50694 1.25096 2.37896 2.37894C1.26148 3.49642 1.20523 5.28514 2.23496 6.46711L7.49986 11.7403L12.7648 6.46786C13.7952 5.28514 13.739 3.49867 12.62 2.37744Z"
                      fill="#E0BEA2"
                    />
                  </svg>
                  <span>в обране</span>
                </button>
              </div>
              <div className="card__details-title">
                <span>Подробиці</span>
              </div>
              <div className="card__details">
                <div className="card__description description">
                  <div className="description__title">
                    Обміри та опис
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3.88903L8.88906 -2.8597e-05L10 1.11091L5 6.11091L1.32478e-08 1.11091L1.11094 -2.85042e-05L5 3.88903Z"
                        fill="#E0BEA2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="card__hr"></div>
                <div className="card__composition composition">
                  <div className="composition__title">
                    Склад та догляд
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3.88903L8.88906 -2.8597e-05L10 1.11091L5 6.11091L1.32478e-08 1.11091L1.11094 -2.85042e-05L5 3.88903Z"
                        fill="#E0BEA2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="card__hr"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductCard;
