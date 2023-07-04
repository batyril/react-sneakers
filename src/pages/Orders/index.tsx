import { Header } from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { CardItem } from '../../components/CardItem';
import { Skeleton } from '../../components/Skeleton';

import { IOrders, ISneaker } from '../../const/interfaces.ts';

import style from './Orders.module.scss';

import { getHoursHoursMinutes } from '../../helpers/getHoursHoursMinutes.ts';
import { getDaysMonths } from '../../helpers/getDaysMonths.ts';
import { Blank } from '../../components/Blank';
import { useOrderQuery } from '../../hooks/useOrderQuery.ts';

export const Orders = () => {
  const { isLoading, data, isSuccess } = useOrderQuery();

  const renderItem = () => {
    return isLoading
      ? [...Array(10)].map((_, index) => <Skeleton key={index} />)
      : isSuccess &&
          data.map((order: IOrders) => {
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
        {isSuccess && data.length > 0 ? (
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
