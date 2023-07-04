import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sneakersService } from '../services/sneakersService.ts';
import { ISneaker } from '../const/interfaces.ts';

export const useCartAddMutation = () => {
  const client = useQueryClient();
  const { addCart } = sneakersService();
  const { isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (sneaker: ISneaker) => addCart(sneaker),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return { isLoading, mutate, isSuccess };
};
