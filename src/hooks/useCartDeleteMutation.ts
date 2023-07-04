import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sneakersService } from '../services/sneakersService.ts';

export const useCartDeleteMutation = () => {
  const client = useQueryClient();
  const { deleteCart } = sneakersService();
  const { isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (id: string) => deleteCart(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return { isLoading, mutate, isSuccess };
};
