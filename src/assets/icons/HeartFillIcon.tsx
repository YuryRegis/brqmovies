import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const HeartFillIcon = ({size = 14, color = 'black'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M1.61677 2.20051C0.238421 3.57885 0.238422 5.81359 1.61677 7.19193L6.96292 12.5381L6.99967 12.5013L7.03646 12.5381L12.3826 7.19198C13.761 5.81363 13.761 3.5789 12.3826 2.20055C11.0043 0.822207 8.76954 0.822208 7.39119 2.20055L6.99971 2.59203L6.60819 2.20051C5.22985 0.822162 2.99511 0.822162 1.61677 2.20051Z"
        fill={color}
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
