import React from 'react';
import {FlatList, RefreshControl, Text, ViewStyle} from 'react-native';

import {EmptyContentList} from './EmptyContentList';
import {useFavoriteMovieList} from '@domain';
import {IMovieList} from './types';
import {Box} from '@components';
import { is } from 'date-fns/locale';


export function FavoriteList({
  flatListRef,
  renderItem,
}: IMovieList) {

  const {
    list: moviesList,
    fetchNextPage,
    isLoading,
    isError,
    refresh,
  } = useFavoriteMovieList();

  const contentContainerFlex = moviesList.length === 0 ? 1 : undefined;

  return (
    <FlatList
      numColumns={2}
      ref={flatListRef}
      data={moviesList}
      refreshing={isLoading}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      onEndReached={fetchNextPage}
      columnWrapperStyle={$columnWrapper}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyContentList}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{flex: contentContainerFlex}}
      ItemSeparatorComponent={() => <Box height={16}/>}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
    />
  );
};

const $columnWrapper: ViewStyle = {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
};
