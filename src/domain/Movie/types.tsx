export interface IMovie {
    id: number;
    title: string;
    overview: string;
    voteCount: string;
    posterPath: string;
    popularity: string;
    voteAverage: string;
    releaseDate: string;
  }
  
  export interface IMovieAPI {
    id: number;
    title: string;
    adult: boolean;
    video: boolean;
    overview: string;
    vote_count: number;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    original_title: string;
    original_language: string;
    genre_ids?: number[] | null;
  }
  