import {TextInputProps as RNTextInputProps} from 'react-native';
import {BoxProps, TextPresets} from '@components';


export interface TextInputProps extends RNTextInputProps {
  boxProps?: BoxProps;
  errorMessage?: string;
  textPreset?: TextPresets;
  containerBoxProps?: BoxProps;
  LeftComponent?: React.ReactElement;
  RightComponent?: React.ReactElement;
}
