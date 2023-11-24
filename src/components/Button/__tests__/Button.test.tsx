import React from 'react';
import {StyleSheet} from 'react-native';

import {Button} from '../';
import {theme} from '@theme';
import {ButtonProps} from '../ButtonProps';
import {render, fireEvent, screen} from 'test-utils';


function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" testID='btn'{...props} />);

  const button = screen.getByTestId('btn');
  const titleElement = screen.getByText(/button title/i);
  return {
    button,
    titleElement,
  };
}

describe('[Unit] Button', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement);
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled', () => {
    const mockedOnPress = jest.fn();
    
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the backgroundColor should be gray if button is disabled', () => {
    
    const {button} = renderComponent({disabled: true});
    
    const buttonStyle = StyleSheet.flatten(button.props.style);
    expect(buttonStyle.backgroundColor).toEqual(theme.colors.gray5);
  });

  describe('when loading', () => {
    beforeEach(() => {
      render(<Button title="Button Title" testID='btn' loading={true}/>);
    });
  
    it('renders the ActivityIndicator', () => {
      const button = screen.getByTestId('btn');
      expect(button.props.children[0].type.name).toEqual('ActivityIndicator');
    });

    it('does not render the title', () => {
      const titleElement = screen.queryByText(/button title/i);
      expect(titleElement).toBeNull();
    });

    it('should be disabled', () => {
      const mockedOnPress = jest.fn();

      const button = screen.getByTestId('btn');

      fireEvent.press(button);
      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
