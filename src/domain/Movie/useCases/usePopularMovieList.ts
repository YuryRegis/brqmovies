import {movieService} from '@domain';
import {QueryKeyEnum, usePaginatedList} from '@infra';


export function usePopularMovieList() {
  return usePaginatedList(
    [QueryKeyEnum.MOVIES],
    movieService.getPopularList,
  );
};
