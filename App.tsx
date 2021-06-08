/* eslint-disable camelcase */
import React from 'react';
import { ThemeProvider } from 'styled-components';
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

import Loading from '@/components/Loading';
import Home from '@/screens/Home';
import CarDetails from '@/screens/CarDetails';
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
      <CarDetails />
    </ThemeProvider>
  );
};

export default App;
