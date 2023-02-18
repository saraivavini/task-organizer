import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#006AFF',
    },
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
