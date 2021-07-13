/* eslint-disable camelcase */
import React from 'react';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components';

import Loading from '@/components/Loading';
import { AppProvider } from '@/hooks';
import Routes from '@/routes';
import { theme } from '@/styles/theme';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading size="large" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
