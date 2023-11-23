import React from 'react';
import {Box, Text} from '@components';


export interface ITabButton {
    isActive: boolean;
    title: string;
};

export function TabButton({isActive, title}: ITabButton) {
  return (
    <Box
    flex={1}
    justifyContent="center"
    alignItems="center"
    backgroundColor="background">
        
        <Text
            color={isActive ? 'buttonPrimary' : 'gray3'}
            preset="paragraphMedium"
            bold>
            {title}
        </Text>

        <Box
            width="100%"
            height={1}
            marginTop="s8"
            backgroundColor={isActive ? 'buttonPrimary' : 'gray3'}
        />
    </Box>
  );
};
