import React from 'react';

import {
  Box,
  Text,
  Button,
  Screen,
} from '@components';
import {BRQLogo} from '@brand';
import { useAuth } from '@contexts';


export function HomeScreen() {
  const {signOut} = useAuth();
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
        <Button 
          title="Logout"
          onPress={signOut}
        />
      </Box>
    </Screen>
  );
};
