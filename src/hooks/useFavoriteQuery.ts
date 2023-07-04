import { sneakersService } from '../services/sneakersService.ts';
import { useQuery } from '@tanstack/react-query';

export const useFavoriteQuery = () => {
  const { getFavorite } = sneakersService();

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['favorite'],
    queryFn: getFavorite,
    staleTime: 5000,
  });

  return { isLoading, data, isSuccess };
};
