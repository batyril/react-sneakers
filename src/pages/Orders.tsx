import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import style from './Orders.module.scss';
import { useEffect, useState } from 'react';
import useSneakersService from '../service/useSneakersService.tsx';
import CardItem from '../components/CardItem';
import { IOrders, ISneaker } from '../../interfaces.ts';
import { Skeleton } from '../components/Skeleton';

export function Orders({ sideMenuOpened }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getOrders } = useSneakersService();
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getOrders();
      setItems(data);
      setIsLoading(false);
    })();
  }, []);

  const renderItem = () => {
    if (isLoading) {
      return [...Array(10)].map((_, index) => <Skeleton key={index} />);
    }

    return items.length === 0
      ? null
      : items.map((order: IOrders) => {
          return (
            <div key={order.id} className={style.orders__item}>
              <h3 className={style.orders__id}>Заказ {order.id}</h3>
              <div className={style.orders__sneakers}>
                {order.item.map((item: ISneaker) => (
                  <CardItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          );
        });
  };
  return (
    <>
      {sideMenuOpened ? <SideMenu /> : null}
      <Header />
      <section className='content'>
        <div className='orders'>
          <h3 className={style.orders__title}>Мои заказы</h3>
          {renderItem()}
        </div>
      </section>
    </>
  );
}
