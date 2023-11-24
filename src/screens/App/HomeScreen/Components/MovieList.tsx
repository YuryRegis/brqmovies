import React from 'react';
import {FlatList, RefreshControl, ViewStyle} from 'react-native';

import {usePopularMovieList} from '@domain';

import {Box} from '@components';
import {IMovieList} from './types';
import {EmptyContentList} from './EmptyContentList';


export function MovieList({
  flatListRef,
  renderItem,
}: IMovieList) {

  const {
    list: moviesList,
    fetchNextPage,
    isLoading,
    refresh,
  } = usePopularMovieList();

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
      ItemSeparatorComponent={() => <Box height={16}/>}
      ListEmptyComponent={EmptyContentList({message: 'Ops! Lista vazia!'})}
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
