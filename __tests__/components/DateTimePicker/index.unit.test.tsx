import { fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { DateTimePicker } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(DateTimePicker, {});

describe('DateTimePicker tests', () => {
  it('Should renders correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    const dateTimePicker = getByTestId('date-time-picker-input');

    expect(dateTimePicker).toBeDefined();
  });

  it('Should change date correctly on IOS', () => {
    const onChange = jest.fn();

    const { component } = renderComponent({
      onChange,
    });

    const { getByTestId } = component;

    const timePicker = getByTestId('date-time-picker-ios');
    const date = new Date(1999, 7, 12);

    act(() => {
      fireEvent(timePicker, 'onChange', {
        type: 'set',
        nativeEvent: {
          timestamp: date.getTime(),
        },
      });
    });

    expect(timePicker).toBeDefined();
    expect(onChange).toBeCalledWith(date);
  });
});
