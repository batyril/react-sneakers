import { useFavoriteAddMutation } from '../hooks/useFavoriteAddMutation.ts';
import { useFavoriteDeleteMutation } from '../hooks/useFavoriteDeleteMutation.ts';
import { useCartDeleteMutation } from '../hooks/useCartDeleteMutation.ts';
import { useCartAddMutation } from '../hooks/useCartAddMutation.ts';
import { useSneakersQuery } from '../hooks/useSneakersQuery.ts';
import { useCartQuery } from '../hooks/useCartQuery.ts';
import { useFavoriteQuery } from '../hooks/useFavoriteQuery.ts';

export const TanStackQueryService = () => {
  const { mutate: deleteFromCart } = useCartDeleteMutation();

  const { mutate: addToCart } = useCartAddMutation();

  const { mutate: addToFavorites } = useFavoriteAddMutation();

  const { mutate: deleteFromFavorites } = useFavoriteDeleteMutation();

  const { data: sneakersData, isLoading: isLoadingSneakers } =
    useSneakersQuery();

  const { data: cartData } = useCartQuery();

  const { data: favoriteData } = useFavoriteQuery();

  return {
    sneakersData,
    isLoadingSneakers,
    cartData,
    favoriteData,
    deleteFromCart,
    addToCart,
    addToFavorites,
    deleteFromFavorites,
  };
};
