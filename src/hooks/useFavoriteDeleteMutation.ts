import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sneakersService } from '../services/sneakersService.ts';

export const useFavoriteDeleteMutation = () => {
  const client = useQueryClient();
  const { deleteFavorite } = sneakersService();
  const { isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (id: string) => deleteFavorite(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['favorite'] });
    },
  });

  return { isLoading, mutate, isSuccess };
};
