import React from 'react';

import {
  Box,
  Text,
  Screen,
} from '@components';
import {BRQLogo} from '@brand';


export function HomeScreen() {

  return (
    <Screen flex={1}>
      <Box flex={1} justifyContent='center'>
        <BRQLogo/>
        <Text
          textAlign="center"
          color="primaryContrast"
          preset="headingLarge">
            HOME SCREEN
        </Text>
      </Box>
    </Screen>
  );
};
