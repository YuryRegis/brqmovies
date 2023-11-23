import React from 'react';
import {FlatList, RefreshControl, ViewStyle} from 'react-native';

import {usePopularMovieList} from '@domain';
import {IMovieList} from './types';
import {Box} from '@components';


export function MovieList({
  flatListRef,
  renderItem,
}: IMovieList) {

  const {
    list: moviesList,
    fetchNextPage,
    isLoading,
    isError,
    refresh,
  } = usePopularMovieList();

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
