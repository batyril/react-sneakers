import searchIcon from '../../img/search.svg';
import styles from './Search.module.scss';
function Search() {
  return (
    <form className={styles.search}>
      <input className={styles.search__input} placeholder='Поиск...' />
      <img
        className={styles.search__image}
        src={searchIcon}
        alt='search icon'
      />
    </form>
  );
}

export default Search;
