import account from '../../img/account.svg';
import openFavorites from '../../img/open-favorite.svg';
import logo from '../../img/nike-logo.svg';
import store from '../../img/store.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.ts';
import { useLocation } from 'react-router';
import favoritePage from '../../img/delete-favorite.svg';
import ordersPage from '../../img/ordersPage.svg';
import styles from './Header.module.scss';
export const Header = () => {
  const location = useLocation();
  const isFavoritePage = location.pathname === '/favorite';
  const isOrdersPage = location.pathname === '/orders';
  const { setSideMenuOpened: onOpen, finalPrice } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link title='home' to='/'>
        <div className={styles.header__logo}>
          <img
            width='100px'
            className={styles.header__image}
            alt='logo'
            src={logo}
          />

          <div>
            <h3 className={styles.header__title}>Nike Sneaker Hub</h3>
            <p className={styles.header__description}>
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
      </Link>
      <ul className={styles.header__menu}>
        <li>
          <img onClick={() => onOpen(true)} src={store} alt='store ' />
          <span>{finalPrice} ₽</span>
        </li>
        <li>
          <Link title='orders' to='/orders'>
            <img src={isOrdersPage ? ordersPage : account} alt='account' />
          </Link>
        </li>
        <li>
          <Link title='favorite' to='/favorite'>
            <img
              src={isFavoritePage ? favoritePage : openFavorites}
              alt='favorites'
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};
