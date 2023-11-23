import { RefObject } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { IMovie } from '@domain';


export type ScreenType = 'movies' | 'favorites';
export type ScreenName = 'Todos os Filmes' | 'Filmes Favoritos';

export const screenOptions: Record<ScreenName, ScreenType> = {
  'Todos os Filmes': 'movies',
  'Filmes Favoritos': 'favorites',
}; 
export interface IMovieList {
  flatListRef: RefObject<FlatList>;
  renderItem: ListRenderItem<IMovie>;
};
