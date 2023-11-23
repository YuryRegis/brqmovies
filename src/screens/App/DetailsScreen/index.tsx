import React, {useState} from 'react';
import {Animated, ImageBackground, ScrollView, ViewStyle} from 'react-native';

import {Box, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
import {CardGroup, Header} from './components';

export function DetailsScreen({
  route,
  navigation,
}: AppScreenProps<'DetailsScreen'>) {
  const movie = route.params;
  const {top, bottom} = useAppSafeArea();
  const [scrollY] = useState(new Animated.Value(0));

  return (
    <>
      <Header navigation={navigation} scrollY={scrollY} movie={movie} />
      
      <Box
        flex={1}  
        backgroundColor="background"
        style={{paddingTop: -top}}>

        <ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}>

          <ImageBackground
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.posterPath}`}}
            style={$imageBackground}
          />

          <Box paddingHorizontal="s16" gap="s16">
            <Text
              preset="headingLarge"
              color="grayWhite"
              marginTop="s32"
              bold>
              {movie.title}
            </Text>

            <Text preset="paragraphSmall" color="primary" bold>
              SINOPSE
            </Text>

            <Text preset="paragraphMedium" color="grayWhite">
              {movie.overview}
            </Text>

            <CardGroup movie={movie} /> 
          </Box>
        </ScrollView>
      </Box>

      <Box backgroundColor="background" style={{paddingBottom: bottom + 8}} />

    </>
  );
};

const $imageBackground: ViewStyle = {
  width: '100%',
  height: 526,
};
