import { sneakersService } from '../services/sneakersService.ts';
import { useQuery } from '@tanstack/react-query';

export const useCartQuery = () => {
  const { getCart } = sneakersService();

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    staleTime: 5000,
  });

  return { isLoading, data, isSuccess };
};
