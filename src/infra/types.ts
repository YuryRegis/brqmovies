
export enum QueryKeyEnum {
  MOVIES = '@MoviesList',
  FAVORITES = '@FavoriteMoviesList',
};

export interface MutationOptions<T> {
  errorMessage?: string;
  onSuccess?: (data: T) => void;
  onError?: (message: string) => void;
}
