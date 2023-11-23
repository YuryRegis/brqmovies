import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput} from '../PasswordInput';
import {PasswordInputProps} from '../PasswordInput/PasswordInputProps';


export function FormPasswordInput<FormType extends FieldValues>({
  name,
  rules,
  control,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
};
