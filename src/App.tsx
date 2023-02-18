import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import './locales';
import { theme } from './global/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
