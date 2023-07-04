import { sneakersService } from '../services/sneakersService.ts';
import { useQuery } from '@tanstack/react-query';

export const useOrderQuery = () => {
  const { getOrders } = sneakersService();

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    staleTime: 5000,
  });

  return { isLoading, data, isSuccess };
};
