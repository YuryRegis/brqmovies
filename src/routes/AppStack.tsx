import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IMovie} from '@domain';
import {HomeScreen, DetailsScreen} from '@screens';


export type AppStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: IMovie;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
