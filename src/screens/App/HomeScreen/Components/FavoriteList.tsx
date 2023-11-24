import React from 'react';
import {FlatList, RefreshControl, Text, ViewStyle} from 'react-native';

import {EmptyContentList} from './EmptyContentList';
import {useFavoriteMovieList} from '@domain';
import {IMovieList} from './types';
import {Box} from '@components';


export function FavoriteList({
  flatListRef,
  renderItem,
}: IMovieList) {

  const {
    list: moviesList,
    fetchNextPage,
    isLoading,
    refresh,
  } = useFavoriteMovieList();


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
