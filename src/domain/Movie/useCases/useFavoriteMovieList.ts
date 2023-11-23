import {movieService} from '../MovieService';
import {QueryKeyEnum, usePaginatedList} from '@infra';


export function useFavoriteMovieList() {
  return usePaginatedList(
    [QueryKeyEnum.FAVORITES],
    movieService.getFavoriteList,
  );
};
