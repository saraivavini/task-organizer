import React, { useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import './locales';
import { theme } from './global/theme';
import OneSignal from 'react-native-onesignal';
import { ONESIGNAL_APP_ID } from '@env';

OneSignal.setAppId(ONESIGNAL_APP_ID as string);

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
