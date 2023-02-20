import React, { useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import './locales';
import { theme } from './global/theme';
import { useRequestUserPermissionPushNotifications } from './helpers';

export default function App() {
  useRequestUserPermissionPushNotifications();

  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
