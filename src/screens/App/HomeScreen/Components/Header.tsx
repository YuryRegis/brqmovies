import React from 'react';

import {Box, FloatingMenuButton, OptionsType, Text} from '@components';
import {useAuth} from '@contexts';

export function Header() {
  const {signOut} = useAuth();

  const option: OptionsType = {
    title: 'Sair',
    icon: 'logout',
    action: () => signOut(),
  };
    

  return (
    <Box 
      flexDirection="row"
      alignItems='center'
      paddingVertical='s18' 
      justifyContent="space-between">

      <Text preset="headingMedium" color="grayWhite">
        BRQ Movies
      </Text>

      <FloatingMenuButton option={option} />
    </Box>
  );
};
