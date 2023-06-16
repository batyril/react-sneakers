export type SneakersType = ISneaker[];

export interface ISneaker {
  price: number;
  name: string;
  avatar: string;
  id: string;
}
export interface IOrders {
  id: number;
  item: ISneaker[];
}
export type RequestFunction = <T>(
  url: string,
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body: null | string,
  headers?: { [key: string]: string }
) => Promise<T>;
