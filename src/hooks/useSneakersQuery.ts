import { sneakersService } from '../services/sneakersService.ts';
import { useQuery } from '@tanstack/react-query';

export const useSneakersQuery = () => {
  const { getSneakers } = sneakersService();

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getSneakers,
    staleTime: 5000,
  });

  return { isLoading, data, isSuccess };
};
