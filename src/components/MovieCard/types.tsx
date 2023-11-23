import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {IMovie} from '@domain';
import {AppStackParamList} from '@routes';


export interface IMovieCard {
  movie: IMovie;
  navigation: NativeStackNavigationProp<AppStackParamList, 'HomeScreen'>;
}
