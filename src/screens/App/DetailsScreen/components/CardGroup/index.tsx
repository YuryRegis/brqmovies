import React from 'react';
import { Dimensions } from 'react-native';

import {Card} from '../Card';
import {IMovie} from '@domain';
import {Box} from '@components';


const {width: screenWidth} = Dimensions.get('window');
export interface ICardGroup {
  movie: IMovie;
}

export function CardGroup({movie}: ICardGroup) {
  return (
    <Box marginTop="s32" style={$wrapper}>

      <Box flexDirection="row" justifyContent="space-between">
        <Card label="Prestígio" value={movie.popularity} icon="heart" />
        <Card label="Nota" value={movie.voteAverage} icon="star" />
      </Box>
      
      <Box flexDirection="row" justifyContent="space-between">
        <Card label="Ano" value={movie.releaseDate} icon="calendar" />
        <Card label="Votos" value={movie.voteCount} icon="thumbsUp" />
      </Box>
    
    </Box>
  );
};

const $wrapper = {
  gap: 16,
  marginHorizontal: screenWidth - 375,
};