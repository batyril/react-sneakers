import sneakLogo from '../../img/sneaker-logo.svg';
import account from '../../img/account.svg';
import favorites from '../../img/favorites.svg';
import store from '../../img/store.svg';
import React from 'react';
import { Link } from 'react-router-dom';
interface HeaderType {
  onClickCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ onClickCart }: HeaderType) {
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
          <img onClick={() => onClickCart(true)} src={store} alt='store ' />
          <span>1205 руб</span>
        </li>
        <li>
          <img src={account} alt='account' />
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
