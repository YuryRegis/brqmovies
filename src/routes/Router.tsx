import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {AuthContext} from '../contexts';


export function Router() {
  const {authData} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {Boolean(authData) ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
