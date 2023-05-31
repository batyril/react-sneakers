import searchIcon from '../../img/search.svg';
import styles from './Search.module.scss';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext.ts';
import deleteIcon from '../../img/favorite-delete.svg';

function Search() {
  const { searchName, setSearchName } = useContext(FormContext);

  const onClear = () => {
    if (setSearchName) {
      setSearchName('');
    }
  };

  return (
    <form className={styles.search}>
      <input
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
        className={styles.search__input}
        placeholder='Поиск...'
      />
      <img
        className={styles.search__image}
        src={searchIcon}
        alt='search icon'
      />
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
}

export default Search;
