import {TextStyle} from 'react-native';

import {theme} from '@theme';
import {BoxProps} from '@components';
import {$fontFamily, $fontSizes} from '../Text/TextPresets';


export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  color: theme.colors.inputContrast,
  backgroundColor: theme.colors.inputPrimary,
  ...$fontSizes.paragraphMedium,
};

export function handleTextInputContainerStyle(errorMessage?: string) {
  const textInputContainerStyle: BoxProps = {
    borderColor: errorMessage ? 'error' : 'backgroundContrast',
    backgroundColor: 'inputPrimary',
    paddingHorizontal: 's8',
    paddingVertical: 's12',
    flexDirection: 'row',
    borderRadius: 's4',
    borderWidth: 1,
  };

  return textInputContainerStyle;
};
