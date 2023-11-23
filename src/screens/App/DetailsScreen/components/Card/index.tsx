import React from 'react';
import {Box, Icon, Text, IconName} from '@components';


export interface ICard {
  label: string;
  value: string;
  icon: IconName;
}

export function Card({label, value, icon}: ICard) {
  return (
    <Box
      backgroundColor="backgroundContrast"
      paddingHorizontal="s16"
      marginHorizontal='s4'
      paddingVertical="s8"
      borderRadius="s8"
      maxWidth={160}
      flexGrow={1}
      height={80}
      width='50%'> 
      
      <Box flexDirection="row" alignItems="center">
        <Box
          backgroundColor="background"
          justifyContent="center"
          alignItems="center"
          borderRadius="s20"
          height={28}
          width={28}>
          <Icon name={icon} size={14} color="primary" />
        </Box>

        <Text preset="paragraphCaption" bold color="primary" marginLeft="s8">
          {label.toUpperCase()}
        </Text>
      </Box>
      
      <Text
        bold
        marginLeft="s4"
        color="grayWhite"
        preset="headingSmall">
        {value}
      </Text>
    </Box>
  );
};
