import React from 'react';
import {StyleSheet} from 'react-native';

import {theme} from '@theme';
import {PasswordInput} from '../';
import {fireEvent, render, screen, waitFor} from 'test-utils';
import {PasswordInputProps} from '../PasswordInputProps';


function renderComponent(props?: Partial<PasswordInputProps>) {
    render(<PasswordInput placeholder='Senha' {...props} />);
    const errorName = props?.errorMessage ? props.errorMessage : '';

    const inputElement = screen.getByPlaceholderText(/senha/i);
    const iconLock = screen.UNSAFE_queryByProps({name: 'lock'});
    const iconEye = screen.UNSAFE_queryByProps({name: 'eyeOff'});
    const container = screen.getByTestId('text-input-container');
    const errorMessage = screen.queryByText(errorName, {exact: false});

    return {
      iconEye,
      iconLock,
      container,
      errorMessage,
      inputElement,
    };
}

describe('[Unit] PasswordInput', () => {
  it('initialize with hidden password', () => {
    const {inputElement, errorMessage, iconEye} = renderComponent();
    
    expect(inputElement.props.secureTextEntry).toEqual(true);
    expect(errorMessage).toBeFalsy();
    expect(iconEye).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    const {inputElement, iconEye, iconLock} = renderComponent();
    
    expect(iconEye).toBeTruthy();
    // @ts-ignore-next-line
    fireEvent.press(iconEye);
    
    waitFor(() => {
        expect(iconLock).toBeTruthy();
    });

    expect(inputElement.props.secureTextEntry).toEqual(false);
  });

  it('should render with error', () => {
    const {errorMessage, container} = renderComponent({errorMessage: 'Senha inválida'});
    
    expect(errorMessage).toBeTruthy();
    expect(errorMessage?.props.children).toEqual('Senha inválida');
    
    const containerStyle = StyleSheet.flatten(container.props.style);
    expect(containerStyle.borderColor).toEqual(theme.colors.error);
  });
});
