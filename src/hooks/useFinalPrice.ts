import { ISneaker, sneakersType } from '../../interfaces.ts';

export default function useFinalPrice(sneakerList: sneakersType) {
  return sneakerList.reduce(
    (sum: number, item: ISneaker) => sum + item.price,
    0
  );
}
