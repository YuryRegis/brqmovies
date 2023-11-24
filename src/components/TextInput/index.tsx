import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';

import {TextInputProps} from './TextInputProps';
import {
  $textInputStyle,
  handleTextInputContainerStyle,
} from './TextInputStyles';

export function TextInput({
  style,
  boxProps,
  errorMessage,
  LeftComponent,
  RightComponent,
  containerBoxProps,
  textPreset = 'paragraphSmall',
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box
          testID='text-input-container'
          {...handleTextInputContainerStyle(errorMessage)}
          {...containerBoxProps}>

          {Boolean(LeftComponent) && (
            <Box
              marginHorizontal="s8"
              justifyContent="center"
              alignContent="center">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.inputContrast}
            style={[$textInputStyle, style]}
            {...rnTextInputProps}
          />
          {Boolean(RightComponent) && (
            <Box mr="s8" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        <Box height={20}>
          {Boolean(errorMessage) ? (
            <Text preset={textPreset} bold color="error">
              {errorMessage}
            </Text>
          ) : (
            <Box height={1} bg="grayWhite" />
          )}
        </Box>
      </Pressable>
    </Box>
  );
};
