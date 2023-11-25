import React, { useEffect } from 'react';
import {Platform} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {theme} from '@theme';
import {Router} from '@routes';
import {AuthProvider} from './src/contexts';

const queryClient = new QueryClient();

export function App() {

  useEffect(() => {
    if(Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AuthProvider>
           <Router />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
