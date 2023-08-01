// Импорт стилей
import styles from './Error404.module.scss';
// Компоненты
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';

export const Error404 = () => {
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
};
