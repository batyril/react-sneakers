import styles from './Blank.module.scss';
import { Link } from 'react-router-dom';
import buttons from '../../scss/buttons.module.scss';
import arrowBack from '../../img/arrow-back.svg';

export function Blank() {
  return (
    <div className={styles.blank}>
      <p className={styles.blank__emoji}>&#128580;</p>
      <h3>Закладок нет </h3>
      <p>Вы ничего не добавляли в закладки</p>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <button className={buttons.button}>
          <span className={buttons.button__text}> Вернуться назад </span>
          <img className={buttons.back__arrow} src={arrowBack} alt='arrow' />
        </button>
      </Link>
    </div>
  );
}
