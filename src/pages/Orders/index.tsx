import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import CardItem from '../../components/CardItem';
import { Skeleton } from '../../components/Skeleton';
import { Blank } from '../../components/Blank';

import useSneakersService from '../../service/useSneakersService.tsx';
import { IOrders, ISneaker } from '../../../interfaces.ts';

import style from './Orders.module.scss';

export function Orders() {
  const [items, setItems] = useState<IOrders[]>([]);
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
    return isLoading
      ? [...Array(10)].map((_, index) => <Skeleton key={index} />)
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
      <SideMenu />
      <Header />
      <section className='content'>
        {items.length > 0 ? (
          <div className='orders'>
            <h3 className={style.orders__title}>Мои заказы</h3>
            {renderItem()}
          </div>
        ) : (
          <Blank />
        )}
      </section>
    </>
  );
}
