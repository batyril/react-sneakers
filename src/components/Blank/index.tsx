import styles from './Blank.module.scss';
import { Link } from 'react-router-dom';
import buttons from '../../scss/buttons.module.scss';
import arrowBack from '../../img/arrow-back.svg';

interface IBlank {
  order: boolean;
}

export const Blank = ({ order }: IBlank) => {
  console.log(order);
  return (
    <div className={styles.blank}>
      <p className={styles.blank__emoji}>&#128580;</p>

      <h3> {order ? 'Покупок нет' : 'Закладок нет'} </h3>
      <p>
        {' '}
        {order
          ? 'Вы ничего не добавляли в покупки'
          : 'Вы ничего не добавляли в закладки'}{' '}
      </p>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <button className={buttons.button}>
          <span className={buttons.button__text}> Вернуться назад </span>
          <img className={buttons.back__arrow} src={arrowBack} alt='arrow' />
        </button>
      </Link>
    </div>
  );
};
