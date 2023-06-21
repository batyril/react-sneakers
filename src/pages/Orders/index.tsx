import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { CardItem } from '../../components/CardItem';
import { Skeleton } from '../../components/Skeleton';
import { Blank } from '../../components/Blank';

import { IOrders, ISneaker } from '../../const/interfaces.ts';

import style from './Orders.module.scss';

import axios from 'axios';
import { URLS } from '../../const/urls.ts';
import { getHoursHoursMinutes } from '../../helpers/getHoursHoursMinutes.ts';
import { getDaysMonths } from '../../helpers/getDaysMonths.ts';

export const Orders = () => {
  const [items, setItems] = useState<IOrders[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(String(URLS.ORDERS));
        setItems(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else if (typeof error === 'string') {
          console.log(error);
        }
      }
    })();
  }, []);

  const renderItem = () => {
    return isLoading
      ? [...Array(10)].map((_, index) => <Skeleton key={index} />)
      : items.map((order: IOrders) => {
          return (
            <div key={order.id} className={style.orders__item}>
              <div className={style.orders__details}>
                <p>Заказ {order.id} /</p>
                <p>{` ${getDaysMonths(order.date)} в ${getHoursHoursMinutes(
                  order.date
                )}`}</p>
              </div>

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
};
