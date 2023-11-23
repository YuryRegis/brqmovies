import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Box,
  Icon,
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {LoginSchema, loginSchema} from './loginSchema';
import {useAuth} from '@contexts';
import {BRQLogo} from '@brand';


export function LoginScreen() {
  const {signIn, isLoading} = useAuth();
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({user, password}: LoginSchema) {
    signIn(user, password);
  };

  function navigateToForgotPasswordScreen() {
    // TODO: Navigate to ForgotPasswordScreen  
  };

  return (
    <Screen flex={1}>
      <Box>
        <Box alignItems="center" paddingTop="s40">
            <BRQLogo />
        </Box>
        
        <FormTextInput
          name="user"
          control={control}
          placeholder="Usuário"
          boxProps={{marginTop: 's40'}}
          LeftComponent={
            <Box mr="s8">
              <Icon name="user" size={24}/>
            </Box>
          }
          rules={{
          required: 'Digite seu usuário',
        }}/>

        <FormPasswordInput
          rules={{required: 'Senha é obrigatória'}}
          boxProps={{marginTop: 's16'}}
          keyboardType="numeric"
          placeholder="Senha"
          control={control}
          name="password"
        />

        <Button
          title="Entrar"
          marginTop="s40"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />

        <Text
          marginTop="s24"
          textAlign="center"
          color="primaryContrast"
          preset="paragraphMedium"
          onPress={navigateToForgotPasswordScreen}>
            Esqueci a Senha
        </Text>
      </Box>
    </Screen>
  );
};
