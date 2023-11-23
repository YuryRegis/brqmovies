import React, {useCallback, useRef} from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import {IMovie} from '@domain';
import {AppScreenProps} from '@routes';
import {Header} from './Components/Header';
import {TabBar} from './Components/TabBar';
import {MovieList} from './Components/MovieList';
import {Box, Screen, MovieCard} from '@components';
import {FavoriteList} from './Components/FavoriteList';
import {ScreenName, ScreenType, screenOptions} from './Components/types';


export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  
  const screenOptionsNames = Object.keys(screenOptions) as ScreenName[];  
  const [screen, setScreen] = React.useState<ScreenType>('movies');
  const listRef = useRef<FlatList>(null);


  const TabBarButtonHandler = useCallback((value: ScreenName) => {
    const newScreen = screenOptions[value];
    setScreen(newScreen);
  }, []);

  const renderItem: ListRenderItem<IMovie> = useCallback(
    ({item}) => {
      return <MovieCard movie={item} navigation={navigation} />;
    },
    [navigation],
  );
  
  return (
    <Screen flex={1}>
      <Box>
        <Header />

        <TabBar
          options={screenOptionsNames}
          onChange={TabBarButtonHandler} />

        {screen==='movies' && (
          <MovieList flatListRef={listRef} renderItem={renderItem}
        />)}

        {screen==='favorites' && (
          <FavoriteList flatListRef={listRef} renderItem={renderItem}
        />)}
      
      </Box>
    </Screen>
  );
};
