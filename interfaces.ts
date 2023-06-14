export type sneakersType = ISneaker[];

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
