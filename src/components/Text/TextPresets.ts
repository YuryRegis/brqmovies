import {TextStyle} from 'react-native';

export type TextPresets =
    | 'headingSmall'
    | 'headingLarge'
    | 'headingMedium'
    
    | 'paragraphLarge'
    | 'paragraphSmall'
    | 'paragraphMedium'
    
    | 'paragraphCaption'
    | 'paragraphCaptionSmall';

export function getFontFamily(
    preset: TextPresets,
    semiBold?: boolean,
    italic?: boolean,
    light?: boolean,
    bold?: boolean,
) {
  if (['headingLarge', 'headingSmall'].includes(preset)) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case light && italic:
      return $fontFamily.lightItalic;
    case light:
      return $fontFamily.light;
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
};

export const $fontSizes: Record<TextPresets, TextStyle> = {
    headingLarge: {fontSize: 28, lineHeight: 36},
    headingMedium: {fontSize: 22, lineHeight: 28},
    headingSmall: {fontSize: 20, lineHeight: 36},

    paragraphLarge: {fontSize: 20, lineHeight: 36},
    paragraphMedium: {fontSize: 16, lineHeight: 24},
    paragraphSmall: {fontSize: 14, lineHeight: 20},

    paragraphCaptionSmall: {fontSize: 12, lineHeight: 16},
    paragraphCaption: {fontSize: 14, lineHeight: 24},
};

export const $fontFamily = {
    black: 'Nunito-Black',
    blackItalic: 'Nunito-BlackItalic',
  
    bold: 'Nunito-Bold',
    boldItalic: 'Nunito-BoldItalic',
  
    italic: 'Nunito-Italic',
    regular: 'Nunito-Regular',
  
    light: 'Nunito-Light',
    lightItalic: 'Nunito-LightItalic',
  
    medium: 'Nunito-Medium',
    mediumItalic: 'Nunito-MediumItalic',
  };
