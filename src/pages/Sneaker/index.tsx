// Импорты из React Router
import { useParams } from 'react-router';
// Импорты из React Redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
// Импорт стилей в CSS-модули для компонента Sneaker
import styles from './Sneaker.module.scss';
// Импорты компонентов
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';
// Импорты изображений в формате SVG
import deleteCard from '../../image/deleteCart.svg';
import plusIcon from '../../image/plus.svg';
import addFavoriteIcon from '../../image/add-favorites.svg';
import deleteFavorite from '../../image/delete-favorite.svg';
// Импорты функций updateCart и updateFavorite из соответствующих файлов
import { updateCart } from '../../helpers/updateCart.ts';
import { updateFavorite } from '../../helpers/updateFavorite.ts';
// Импорт пользовательского хука useScrollToTop
import { useScrollToTop } from '../../hooks/useScrollToTop.ts';

export const Sneaker = () => {
  useScrollToTop();
  const dispatch = useDispatch<AppDispatch>();
  const { sneakerId } = useParams();
  const { sneakers } = useSelector((state: RootState) => state.sneakersDetails);
  const item = sneakers.find((item) => item.id === Number(sneakerId));

  const favoriteSneakers = useSelector(
    (state: RootState) => state.favoriteDetails.favorite
  );
  const cartSneakers = useSelector(
    (state: RootState) => state.cartDetails.cart
  );
  const isCart = item
    ? cartSneakers.some((cart) => cart.id === item.id)
    : false;
  const isFavorite = item
    ? favoriteSneakers.some((favorite) => favorite.id === item.id)
    : false;

  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        <div className={styles.sneaker}>
          {item ? (
            <>
              <img
                className={styles.sneaker__image}
                src={item.avatar}
                alt='sneaker'
              />
              <div className={styles.sneaker__inform}>
                <h3 className={styles.sneaker__title}>{item.name}</h3>
                <p className={styles.sneaker__description}>
                  {item.description}
                </p>
                <p className={styles.sneaker__title}>₽ {item.price}</p>

                <button
                  onClick={() => updateCart(item, dispatch, cartSneakers)}
                  className={
                    isCart ? styles.sneaker__delete : styles.sneaker__buy
                  }
                >
                  <img src={isCart ? deleteCard : plusIcon} alt='button' />
                </button>

                <button
                  onClick={() =>
                    updateFavorite(item, dispatch, favoriteSneakers)
                  }
                  className={styles.sneaker__favorite}
                >
                  <img
                    src={isFavorite ? deleteFavorite : addFavoriteIcon}
                    alt='favorite'
                  />
                </button>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};
