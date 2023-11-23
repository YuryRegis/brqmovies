import React, {useState} from 'react';

import {Icon} from '../Icon';
import {useAppTheme} from '@hooks';
import {TextInput} from '../TextInput';
import {PasswordInputProps} from './PasswordInputProps';


export function PasswordInput(props: PasswordInputProps) {
  const {spacing} = useAppTheme();
  const [isSecureON, setIsSecureON] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecureON(prevState => !prevState);
  };

  return (
    <TextInput
      secureTextEntry={isSecureON}
      style={{marginLeft: spacing.s8}}
      {...props}
      LeftComponent={
        <Icon name="lock" color="inputContrast" size={24} />
      }
      RightComponent={
        <Icon
          color="inputContrast"
          onPress={toggleSecureTextEntry}
          name={isSecureON ? 'eyeOff' : 'eyeOn'}
        />
      }
    />
  );
};
