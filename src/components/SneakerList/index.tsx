import Search from '../Search';
import Card from '../Card';
import styles from './SneakerList.module.scss';

console.log(styles);

function SneakerList() {
  return (
    <div className={styles.sneakers}>
      <div className={styles.sneakers__top}>
        <h3 className={styles.sneakers__title}>Все кроссовки</h3>
        <Search></Search>
      </div>
      <div className={styles.sneakers__list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SneakerList;
