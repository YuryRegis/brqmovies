import {useFavoriteMovieList} from './useFavoriteMovieList';


export function useIsFavorite(movieId: number) {
  const {list} = useFavoriteMovieList();

  const isFavorite = list?.some(movie => movie.id === movieId);

  return {
    isFavorite,
  };
};
