import React, {useState} from 'react';
import {Dimensions, Modal} from 'react-native';

import {useAppSafeArea} from '@hooks';
import {IFloatingMenu} from './FloatingMenuProps';
import {Box, Icon, Text, TouchableOpacityBox} from '@components';


const {width: screenWidth} = Dimensions.get('window');

export function FloatingMenuButton({option}: IFloatingMenu) {
  const {top} = useAppSafeArea();
  const [visible, setVisible] = useState(false);

  function toggleMenu() {
    setVisible(prevState => !prevState);
  };

  return (
    <>
      <Box 
        backgroundColor={visible ? "buttonPrimary" : "background"} 
        justifyContent='center'
        alignItems='center'
        borderRadius="s12"
        height={24}
        width={24}
        > 
        <Icon
          color={visible ? "background" : "inputContrast"}
          onPress={toggleMenu}
          name="menu"
          size={16}
        />
      </Box>
      
      <Modal transparent visible={visible}>
        <Box position='absolute'>
          <Box height={top + 58} left={screenWidth - 70} onTouchStart={toggleMenu}/>  
          <Box
            borderRadius="s8"
            paddingVertical="s10"
            backgroundColor="gray"
            left={screenWidth - 134}>

            
            <TouchableOpacityBox
              paddingHorizontal="s24"
              onPress={option.action}
              flexDirection="row"
              alignItems="center">
              
              <Icon name={option.icon} color="grayWhite" size={24} />
              
              <Text
                paddingLeft="s8"
                preset="headingSmall"
                color="grayWhite">
                {option.title}
              </Text>
            </TouchableOpacityBox>
          </Box>
        </Box>                
      </Modal>
    </>
  );
};
