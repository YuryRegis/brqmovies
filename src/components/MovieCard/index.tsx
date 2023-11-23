import React from 'react';
import {Image} from 'react-native';

import {IMovieCard} from './types';
import {TouchableOpacityBox} from '@components';


export function MovieCard({movie, navigation}: IMovieCard) {
  function navigateToMovieDetailsScreen() {
    //TODO: Navigate to MovieDetailsScreen
  };

  return (
    <TouchableOpacityBox
      borderRadius="s8"
      onPress={navigateToMovieDetailsScreen}>
      <Image
        style={$image}
        resizeMode="center"
        source={{uri: `https://image.tmdb.org/t/p/w780/${movie.posterPath}`}}
      />
    </TouchableOpacityBox>
  );
};

const $image = {
  width: 156,
  height: 228,
};
