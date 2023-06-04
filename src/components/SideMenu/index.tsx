import SideMenuItem from '../SideMenuItem';
import arrow from '../../img/arrow.svg';
import arrowBack from '../../img/arrow-back.svg';
import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenu.module.scss';
import { sneakersType } from '../../../interfaces.ts';
import React from 'react';
import emptyIcon from '../../img/empty-cart.png';

interface ISideMenu {
  sneakers: sneakersType;
  onDeleteCart: (id: string) => void;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

function EmptyCart({ onClose }) {
  return (
    <div className={styles.emptyCart}>
      <img width='120px' height='120px' src={emptyIcon} alt='empty cart' />
      <h3 className={styles.emptyCart__title}>Корзина пустая</h3>
      <p className={styles.emptyCart__text}>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <button onClick={onClose} className={styles.backBtn}>
        <span className={styles.backBtn__text}> Вернуться назад </span>
        <img className={styles.backBtn__arrow} src={arrowBack} alt='arrow' />
      </button>
    </div>
  );
}

interface IFullCart {
  sneakers: sneakersType;
  onDeleteCart: (idl: string) => void;
}

function FullCart({ sneakers, onDeleteCart }: IFullCart) {
  return (
    <>
      <div className={styles.sideMenu__list}>
        {sneakers.map((sneaker) => {
          return (
            <SideMenuItem
              key={sneaker.id}
              {...sneaker}
              onDeleteCart={() => onDeleteCart(sneaker.id)}
            />
          );
        })}
      </div>
      <div className={styles.total}>
        <p className={styles.total__text}>Итого</p>
        <div className={styles.total__border}></div>
        <p className={styles.total__price}>21 498 руб. </p>
      </div>
      <div className={styles.total}>
        <p className={styles.total__text}>Налог 5%: </p>
        <div className={styles.total__border}></div>
        <p className={styles.total__price}>1074 руб. </p>
      </div>
      <button className='side-menu__buy buy-btn'>
        <span className='buy-btn__text'>Оформить заказ </span>
        <img className='buy-btn__arrow' src={arrow} alt='arrow' />
      </button>
    </>
  );
}

function SideMenu({ onClose, sneakers, onDeleteCart }: ISideMenu) {
  return (
    <div className={styles.overlay}>
      <div className={styles.sideMenu}>
        <h3 className={styles.sideMenu__title}>Корзина </h3>
        <button
          onClick={() => onClose(false)}
          className={styles.sideMenu__close}
        >
          <img src={deleteIcon} alt='delete' />
        </button>
        {sneakers.length !== 0 ? (
          <FullCart sneakers={sneakers} onDeleteCart={onDeleteCart} />
        ) : (
          <EmptyCart onClose={() => onClose(false)} />
        )}
      </div>
    </div>
  );
}

export default SideMenu;
