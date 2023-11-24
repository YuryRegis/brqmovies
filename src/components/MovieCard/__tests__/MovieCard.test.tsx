import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MovieCard} from '..';
import {mockedMovie} from './mocks';
import {fireEvent, render, screen} from 'test-utils';
import {AppStackParamList} from '@routes';


type mockedNavigationProp = NativeStackNavigationProp<AppStackParamList, 'HomeScreen'>;
const mockedJestNavigate = {navigate: jest.fn()} as unknown as mockedNavigationProp;

describe('[Unit] MovieCard', () => {
  beforeAll(() => {
    jest.mock('@react-navigation/native', () => {
      const originalModule = jest.requireActual('@react-navigation/native');
      return {
        ...originalModule,
        useNavigation: mockedJestNavigate,
      };
    });
  });

  test('it should render correctly', () => {
    render(<MovieCard movie={mockedMovie} navigation={mockedJestNavigate}/>);
    
    const image = screen.queryByAccessibilityHint('Movie Poster');

    expect(image).toBeTruthy();
    expect(image?.props.source.uri).toEqual(`https://image.tmdb.org/t/p/w780/5MPdNRHzd0NbOJbrrXO77DVHP4n.jpg`);
  });

  test('it should redirect to DeteialsScreen onClick on this card', () => {
    render(<MovieCard movie={mockedMovie} navigation={mockedJestNavigate}/>);
    
    const image = screen.queryByAccessibilityHint('Movie Poster');

    fireEvent.press(image!);
    
    expect(mockedJestNavigate.navigate).toHaveBeenLastCalledWith(
      'DetailsScreen', mockedMovie
    );
  });
});
