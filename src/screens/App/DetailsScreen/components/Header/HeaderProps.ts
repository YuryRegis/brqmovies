import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Animated} from 'react-native';

import {IMovie} from '@domain';
import {AppStackParamList} from '@routes';


export interface IHeader {
  navigation: NativeStackNavigationProp<
    AppStackParamList,
    'DetailsScreen'
  >;
  scrollY: Animated.Value;
  movie: IMovie;
}
