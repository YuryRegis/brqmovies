import {createTheme} from '@shopify/restyle';

const palette = {
  black: '#16171B',
  Error: '#EA3838',
  carrot: '#EC8B00',
  Success: '#62FF71',
  ErrorDark: '#D40000',
  SuccessDark: '#00AA4E',

  gray: '#2E2F33',
  gray1: '#3C3C3B',
  gray2: '#5A5A5A',
  gray3: '#A9A9A9',
  gray4: '#B2B2B2',
  gray5: '#EEEEEE',
  gray6: '#F5F5F5',
  grayWhite: '#FFFFFF',
  grayBlack: '#000000',
  grayTranslucid: 'rgba(0, 0, 0, 0.5)',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.carrot,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.carrot,
    buttonPrimaryContrast: palette.grayWhite,

    inputPrimary: palette.gray,
    inputContrast: palette.grayWhite,

    background: palette.black,
    backgroundContrast: palette.gray,

    backgroundTranslucid: palette.grayTranslucid,

    success: palette.Success,
    successDark: palette.SuccessDark,
    
    error: palette.Error,
    errorDark: palette.ErrorDark,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    s78: 78,
  },
  borderRadii: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
  },
  breakpoints: {
    phone: 0,
    tablet: 769,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
