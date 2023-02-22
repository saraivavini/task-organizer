import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/global/theme';
import { ProviderProps } from './types';

export const AppProvider = ({ children }: ProviderProps) => {
  const initialWindowMetrics = {
    frame: {
      width: 320,
      height: 640,
      x: 0,
      y: 0,
    },
    insets: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider
        theme={theme}
        initialWindowMetrics={initialWindowMetrics}
      >
        {children}
      </NativeBaseProvider>
    </ThemeProvider>
  );
};
