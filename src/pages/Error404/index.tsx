import styles from './Error404.module.scss';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';

export function Error404() {
  //TODO:Добавить логотип
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        <div className={styles.error}>
          <h3>Мы не можем найти страницу, которую вы ищете.</h3>
          <h3>Приносим извинения за неудобства.</h3>
        </div>
      </section>
    </>
  );
}
