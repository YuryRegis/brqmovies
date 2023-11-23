export type ScreenType = 'movies' | 'favorites';
export type ScreenName = 'Todos os Filmes' | 'Filmes Favoritos';

export const screenOptions: Record<ScreenName, ScreenType> = {
  'Todos os Filmes': 'movies',
  'Filmes Favoritos': 'favorites',
}; 
