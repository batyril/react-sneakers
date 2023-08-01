// Импорты стилей в CSS-модули для компонента Blank
import styles from './Blank.module.scss';

// Импорт компонента Link из React Router
import { Link } from 'react-router-dom';

// Импорт стилей в CSS-модули для кнопок
import buttons from '../../scss/buttons.module.scss';

// Импорт изображения в формате SVG для стрелки "назад"
import arrowBack from '../../image/arrow-back.svg';

// Импорт констант из файла path.ts
import { PATHS } from '../../const/path.ts';

interface IBlank {
  order: boolean;
}

export const Blank = ({ order }: IBlank) => {
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
      <Link style={{ textDecoration: 'none' }} to={PATHS.HOME}>
        <button className={buttons.button}>
          <span className={buttons.button__text}> Вернуться назад </span>
          <img className={buttons.back__arrow} src={arrowBack} alt='arrow' />
        </button>
      </Link>
    </div>
  );
};
