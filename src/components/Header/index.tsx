import sneakLogo from '../../img/sneaker-logo.svg';
import account from '../../img/account.svg';
import favorites from '../../img/favorites.svg';
import store from '../../img/store.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.ts';

function Header() {
  const { setSideMenuOpened: onOpen, finalPrice } = useContext(AppContext);

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img className='header__image' alt='logo' src={sneakLogo} />
        </Link>

        <div className='header__text'>
          <h3 className='header__title'>REACT SNEAKERS</h3>
          <p className='header__description'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='header__menu'>
        <li>
          <img onClick={() => onOpen(true)} src={store} alt='store ' />
          <span>{finalPrice} ₽</span>
        </li>
        <li>
          <Link to='/orders'>
            <img src={account} alt='account' />
          </Link>
        </li>
        <li>
          <Link to='/favorite'>
            <img src={favorites} alt='favorites' />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
