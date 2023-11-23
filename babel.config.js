module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme/theme.ts',
          '@brand': './src/assets/brand',
          '@icons': './src/assets/icons',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@test': './src/test',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
