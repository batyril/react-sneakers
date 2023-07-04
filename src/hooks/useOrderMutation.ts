import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SneakersType } from '../const/interfaces.ts';
import { sneakersService } from '../services/sneakersService.ts';

export const useOrderMutation = (cartSneakers: SneakersType | []) => {
  const client = useQueryClient();
  const { createOrder } = sneakersService();
  const { isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (serOrderId: React.Dispatch<React.SetStateAction<string>>) =>
      createOrder(cartSneakers, serOrderId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return { isLoading, mutate, isSuccess };
};
