import React, {useRef} from 'react';

import {AnimatedBox, Box, Icon, Text, TouchableOpacityBox} from '@components';
import {useFavoriteAddOrRemove, useIsFavorite} from '@domain';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {IHeader} from './HeaderProps';

export const Header = ({navigation, scrollY, movie}: IHeader) => {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {isFavorite} = useIsFavorite(movie.id);
  const {addOrRemove} = useFavoriteAddOrRemove({
    onSuccess: () => {
      // TODO: open a toast message
    },
    onError: () => {
            // TODO: open a toast message
    },
  });

  const handleFavorite = () => {
    addOrRemove(movie.id, !isFavorite);
  };

  const headerBackgroundColor = useRef(
    scrollY.interpolate({
      inputRange: [0, 100],
      extrapolate: 'clamp',
      outputRange: ['rgba(0, 0, 0, 0)', colors.background],
    }),
  ).current;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <AnimatedBox
      top={0}
      left={0}
      right={0}
      zIndex={1}
      height={80}
      flexDirection="row"
      alignItems="center"
      position="absolute"
      paddingHorizontal="s16"
      justifyContent="space-between"
      style={{backgroundColor: headerBackgroundColor, paddingTop: top}}>
      
      <TouchableOpacityBox
        width={24}
        height={24}
        borderRadius="s20"
        alignItems="center"
        backgroundColor="gray1"
        justifyContent="center"
        onPress={goBack}>

        <Icon name="chevronLeft" size={12} color="primary" />
      </TouchableOpacityBox>

      <AnimatedBox style={{opacity: scrollY.interpolate({
          inputRange: [0, 100],
          extrapolate: 'clamp',
          outputRange: [0, 1],
        })}}>
        <Text
          preset='headingMedium'
          color="grayWhite">
          {movie.title}
        </Text>
      </AnimatedBox>

      <TouchableOpacityBox
        width={24}
        height={24}
        borderRadius="s20"
        alignItems="center"
        backgroundColor="primary"
        justifyContent="center"
        onPress={handleFavorite}>
        
        <Icon
          size={14}
          color="background"
          name={isFavorite ? 'heartFill' : 'heart'}
        />
      </TouchableOpacityBox>
    </AnimatedBox>
  );
};
