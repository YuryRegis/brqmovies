import {formatDate} from '@utils';
import {IMovie, IMovieAPI} from './types';


function adaptMovie(results: IMovieAPI[]): IMovie[] {
  return results.map(movieAPI => {
    return {
      releaseDate: formatDate(movieAPI.release_date),
      voteAverage: movieAPI.vote_average.toString(),
      popularity: movieAPI.popularity.toString(),
      voteCount: movieAPI.vote_count.toString(),
      posterPath: movieAPI.poster_path,
      overview: movieAPI.overview,
      title: movieAPI.title,
      id: movieAPI.id,
    };
  });
};

export const movieAdapter = {
  adaptMovie,
};
