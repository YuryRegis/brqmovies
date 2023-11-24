import React from 'react';
import {Image} from 'react-native';

import {IMovieCard} from './types';
import {TouchableOpacityBox} from '@components';


export function MovieCard({movie, navigation}: IMovieCard) {
  function navigateToDetailsScreen() {
    navigation.navigate('DetailsScreen', movie);
  };

  return (
    <TouchableOpacityBox
      borderRadius="s8"
      overflow='hidden'
      onPress={navigateToDetailsScreen}>
      <Image
        style={$image}
        resizeMode="center"
        accessibilityHint='Movie Poster'
        accessibilityLabel='Movie Poster'
        source={{uri: `https://image.tmdb.org/t/p/w780/${movie.posterPath}`}}
      />
    </TouchableOpacityBox>
  );
};

const $image = {
  width: 156,
  height: 228,
};
