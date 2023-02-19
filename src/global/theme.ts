import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#006AFF',
      '50': '#9fc7ff',
      '100': '#77b0ff',
      '200': '#5099ff',
      '300': '#2881ff',
      '400': '#006aff',
      '500': '#0762e1',
      '600': '#0c59c3',
      '700': '#1150a8',
      '800': '#13468e',
      '900': '#153d75',
    },
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
