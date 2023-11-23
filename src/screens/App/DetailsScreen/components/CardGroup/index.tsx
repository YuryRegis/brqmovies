import React from 'react';

import {Card} from '../Card';
import {IMovie} from '@domain';
import {Box} from '@components';


export interface ICardGroup {
  movie: IMovie;
}

export function CardGroup({movie}: ICardGroup) {
  return (
    <Box marginTop="s32" gap="s16">

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
