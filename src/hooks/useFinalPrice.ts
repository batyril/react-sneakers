import { ISneaker, SneakersType } from '../const/interfaces.ts';

export default function useFinalPrice(sneakerList: SneakersType) {
  return sneakerList.reduce(
    (sum: number, item: ISneaker) => sum + item.price,
    0
  );
}
