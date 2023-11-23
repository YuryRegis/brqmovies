import {
    TouchableOpacityProps as RNTouchableOpacityProps,
    Animated as RNAnimated,
    TouchableOpacity,
    ViewProps,
  } from 'react-native';
  
import {
      border,
      layout,
      shadow,
      spacing,
      createBox,
      BorderProps,
      LayoutProps,
      ShadowProps,
      SpacingProps,
      PositionProps,
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

export type AnimatedBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme> &
  PositionProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNAnimated.AnimatedProps<ViewProps>;

export const TouchableOpacityBox = createRestyleComponent<
    TouchableOpacityBoxProps,
    Theme
  >(
    [backgroundColor, spacing, spacingShorthand, layout, border],
    TouchableOpacity,
  );
  
  export const AnimatedBox = createRestyleComponent<AnimatedBoxProps, Theme>(
    [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
    RNAnimated.View,
  );
  