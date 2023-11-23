import React, {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {AsyncStorage, authService} from '@services';

export interface AuthData  {
  token: string;
  user: string;
}

export interface IAuthContextData {
  signIn: (user: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  authData?: AuthData;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getString('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      Alert.alert('load storage data', error?.message);
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(user: string, password: string) {
    try {
      setisLoading(true);
      const authData = await authService.signIn(user, password);
      setAuthData(authData);
      AsyncStorage.set('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert('Erro ao entrar', error?.message);
    } finally {
      setisLoading(false);
    }
  }

  async function signOut() {
    try {
      setisLoading(true);
      setAuthData(undefined);
      AsyncStorage.delete('@AuthData');
    } catch (error) {
      Alert.alert('Logout error', error?.message);
    } finally {
      setisLoading(false);
    };
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
