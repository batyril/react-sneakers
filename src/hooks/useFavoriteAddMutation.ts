import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sneakersService } from '../services/sneakersService.ts';
import { ISneaker } from '../const/interfaces.ts';

export const useFavoriteAddMutation = () => {
  const client = useQueryClient();
  const { addFavorite } = sneakersService();
  const { isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (sneaker: ISneaker) => addFavorite(sneaker),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['favorite'] });
    },
  });

  return { isLoading, mutate, isSuccess };
};
