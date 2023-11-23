import React from 'react';
import { FlatList } from 'react-native';

import {
  Box,
  Text,
  Button,
  Screen,
} from '@components';
import {BRQLogo} from '@brand';
import { useAuth } from '@contexts';
import { usePopularMovieList } from '@domain';


export function HomeScreen() {
  const {signOut} = useAuth();
  const {
    list: moviesList,
    fetchNextPage,
    isError,
    isLoading,
    refresh,
  } = usePopularMovieList();
  
  return (
    <Screen flex={1}>
      <Box flex={1}>
        <FlatList
          data={moviesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <Box>
              <Text>{item.title}</Text>
            </Box>
          )}
          onEndReached={fetchNextPage}
          onRefresh={refresh}
          refreshing={isLoading}
        />

        <Button 
          title="Logout"
          onPress={signOut}
        />
      </Box>
    </Screen>
  );
};
