import searchIcon from '../../image/search.svg';
import styles from './Search.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import deleteIcon from '../../image/favorite-delete.svg';

export const Search = () => {
  const { searchName, setSearchName } = useContext(AppContext);

  const onClear = () => {
    if (setSearchName) {
      setSearchName('');
    }
  };

  return (
    <form>
      <div className={styles.search__inputWpapper}>
        <input
          onChange={(e) =>
            setSearchName ? setSearchName(e.target.value) : null
          }
          value={searchName}
          className={styles.search__input}
          placeholder='Поиск...'
        />
        <img
          className={styles.search__image}
          src={searchIcon}
          alt='search icon'
        />
      </div>
      {searchName ? (
        <img
          onClick={onClear}
          className={styles.search__clear}
          src={deleteIcon}
          alt='delete'
        />
      ) : null}
    </form>
  );
};
