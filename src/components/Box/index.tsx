import {
    TouchableOpacityProps as RNTouchableOpacityProps,
    TouchableOpacity,
  } from 'react-native';
  
import {
      border,
      layout,
      spacing,
      createBox,
      BorderProps,
      LayoutProps,
      SpacingProps,
      backgroundColor,
      spacingShorthand,
      BackgroundColorProps,
      SpacingShorthandProps,
      createRestyleComponent,
  } from '@shopify/restyle';
  
import {Theme} from '@theme';
  
export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;
  
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
    LayoutProps<Theme> &
    BorderProps<Theme> &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> &
    RNTouchableOpacityProps;
  
export const TouchableOpacityBox = createRestyleComponent<
    TouchableOpacityBoxProps,
    Theme
  >(
    [backgroundColor, spacing, spacingShorthand, layout, border],
    TouchableOpacity,
  );
  