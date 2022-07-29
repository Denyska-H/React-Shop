import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Footer, Header, ProductBlock } from '../components';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchCardItems } from '../redux/card/asyncActions';

const ProductCard: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const { items, status } = useSelector((state: RootState) => state.card);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getCardInfo = async () => {
      const cardId = id ? id : '';

      dispatch(
        fetchCardItems({
          id: cardId,
        }),
      );
    };

    getCardInfo();
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const cardInfo = <ProductBlock {...items} />;
  const gif = <img className="card__gif" alt="loader" src={require('../assets/img/loader.gif')} />;

  return (
    <>
      <Header />
      <section className="card">
        <div className="container">
          {status === 'rejected' ? (
            <div className="card__error-info">
              <h2>Виникла помилка 😢</h2>
              <p>На жаль, дана продукція відсутня на нашому сайті!</p>
            </div>
          ) : (
            <>{status === 'pending' ? gif : cardInfo}</>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductCard;
