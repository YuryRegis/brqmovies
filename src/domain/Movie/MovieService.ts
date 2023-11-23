import {IMovieAPI} from './types';
import {movieAdapter} from './MovieAdapter';
import {MovieAPI, ListResponse, PostFavoriteResponse} from '@services';


const getListGeneric = (response: ListResponse<IMovieAPI>) => {
  const {page, total_pages, total_results, results} = response;

  return {
    page,
    total_pages,
    total_results,
    results: movieAdapter.adaptMovie(results),
  };
};

const getPopularList = async (page: number) => {
  const response = (await MovieAPI.getMovies(page)).data;

  return getListGeneric(response);
};

const getFavoriteList = async (page: number) => {
  const response = (await MovieAPI.getFavoriteMovies(page)).data;

  return getListGeneric(response);
};

const postFavorite = async (
  movieId: number,
  favorite: boolean,
): Promise<PostFavoriteResponse> => {
  const response = (await MovieAPI.postFavorite(movieId, favorite)).data;

  return response;
};

export const movieService = {
  getFavoriteList,
  getPopularList,
  postFavorite,
};
