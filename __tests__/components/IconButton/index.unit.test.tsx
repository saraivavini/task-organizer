import { fireEvent } from '@testing-library/react-native';
import { act, ReactTestInstance } from 'react-test-renderer';
import { IconButton } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(IconButton, {
  testID: 'icon-button',
  icon: 'image',
  onPress: jest.fn(),
});

describe('IconButton tests', () => {
  it('Should renders correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      icon: 'calendar',
    });

    const iconButton = getByTestId('icon-button');
    const icon = iconButton.children[0] as ReactTestInstance;

    expect(iconButton).toBeDefined();
    expect(icon.props.name).toBe('calendar');
  });

  it('Should execute function when pressed', () => {
    const onPress = jest.fn();

    const {
      component: { getByTestId },
    } = renderComponent({
      onPress,
    });

    const iconButton = getByTestId('icon-button');

    act(() => {
      fireEvent.press(iconButton);
    });

    expect(iconButton).toBeDefined();
    expect(onPress).toBeCalled();
  });
});
