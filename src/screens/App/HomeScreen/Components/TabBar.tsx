import React, {memo, useState} from 'react';
import {Pressable} from 'react-native';

import {Box} from '@components';
import {} from './TabBarButton';
import {ScreenName} from './types';
import {TabButton} from './TabBarButton';

export interface ITabBar {
    options: ScreenName[];
    onChange: (value: ScreenName) => void;
  }  

export const TabBar = memo(({options, onChange}: ITabBar) => {
  const [toggled, setToggled] = useState(true);

  const onToggle = () => {
    setToggled(prev => {
      onChange(!prev ? options[0] : options[1]);
      return !prev;
    });
  };

  return (
    <Pressable onPress={onToggle}>
      <Box
        flexDirection="row"
        width="100%"
        backgroundColor="background"
        height={54}>

        <TabButton isActive={toggled} title={options[0]} />
        
        <TabButton isActive={!toggled} title={options[1]} />

      </Box>
    </Pressable>
  );
});
