import { fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { Header } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(Header, {});

describe('Header tests', () => {
  it('Should render with logo correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      showLogo: true,
    });

    const logoImage = getByTestId('logo-image');

    expect(logoImage).toBeDefined();
  });

  it('Should render with Go Back Button', () => {
    const onGoBack = jest.fn();

    const {
      component: { getByTestId },
    } = renderComponent({
      onGoBack,
    });

    const goBackButton = getByTestId('go-back-button');

    act(() => {
      fireEvent.press(goBackButton);
    });

    expect(goBackButton).toBeDefined();
    expect(onGoBack).toBeCalled();
  });

  it('Should render with Sign Out Button', () => {
    const onSignOut = jest.fn();

    const {
      component: { getByTestId },
    } = renderComponent({
      onSignOut,
    });

    const signOutButton = getByTestId('sign-out-button');

    act(() => {
      fireEvent.press(signOutButton);
    });

    expect(signOutButton).toBeDefined();
    expect(onSignOut).toBeCalled();
  });
});
