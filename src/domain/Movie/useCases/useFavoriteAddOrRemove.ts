import {useMutation, useQueryClient} from '@tanstack/react-query';

import {movieService} from '../MovieService';
import {PostFavoriteResponse} from '@services';
import {MutationOptions, QueryKeyEnum} from '@infra';


export function useFavoriteAddOrRemove(
  options?: MutationOptions<PostFavoriteResponse>,
) {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries();

  const {mutate} = useMutation<
    PostFavoriteResponse,
    unknown,
    {
      movieId: number;
      favorite: boolean;
    }
  >({
    mutationFn: async ({movieId, favorite}) =>
      await movieService.postFavorite(movieId, favorite),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.FAVORITES],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao favoritar');
      }
    },
  });

  const addOrRemove = (movieId: number, favorite: boolean) => {
    mutate({movieId, favorite});
  };

  return {
    addOrRemove,
  };
};
