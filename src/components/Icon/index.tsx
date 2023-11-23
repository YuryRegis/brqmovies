import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {IconProps, iconRegistry} from './IconProps';


export function Icon({
  name,
  size,
  onPress,
  color = 'inputContrast',
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return (
    <>
      {Boolean(onPress) ? (
        <Pressable onPress={onPress} hitSlop={10}>
          <SVGIcon size={size} color={colors[color]} />
        </Pressable>
      ) : (
        <SVGIcon size={size} color={colors[color]} />
      )}
    </>
  );
};
