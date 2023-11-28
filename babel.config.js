module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ... other configs, if an
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.style.ts',
        ],
        alias: {
          '@images': './src/assets/imageIndex.ts',
          '@svges': './src/assets/svgIndex.ts',
          '@components': './src/components/componentsIndex.ts',
          '@card': './src/components/cardIndex.ts',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screenName': './src/navigation/screenName.ts',
          '@screens': './src/screens',
          '@redux': './src/services/redux',
          '@api': './src/services/api',
          '@config': './src/services/config',
          '@theme': './src/theme',
          '@utility': './src/utility',
        },
      },
    ],

    // ... other configs, if any
  ],
};
