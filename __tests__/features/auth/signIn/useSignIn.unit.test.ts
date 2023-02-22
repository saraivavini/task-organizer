import { act } from '@testing-library/react-native';
import { useSignIn } from '../../../../src/features/auth/signIn/useSignIn';
import { renderHook } from '../../../utils/renderHook';

import * as requests from '../../../../src/model/requests';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { navigationFunctions } from '../../../__mocks__/@react-navigation/native';

jest.mock('../../../../src/model/requests');
const AuthService = requests.AuthService as jest.Mocked<
  typeof requests.AuthService
>;
AuthService.signIn.mockImplementationOnce(() =>
  Promise.resolve([undefined, { user: {} as FirebaseAuthTypes.User }])
);

describe('useSignIn tests', () => {
  it('should change username and input value', () => {
    const { result } = renderHook(useSignIn);

    act(() => {
      result.current.username.onChange('new username');
      result.current.password.onChange('new password');
    });

    expect(result.current.username.value).toBe('new username');
    expect(result.current.password.value).toBe('new password');
  });

  it('should submit the form when press the main button', () => {
    const { result } = renderHook(useSignIn);

    act(() => {
      result.current.button.onPress();
    });

    expect(AuthService.signIn).toBeCalled();
  });

  it('should navigate to signUp when press the secondary button', () => {
    const { result } = renderHook(useSignIn);

    act(() => {
      result.current.secondaryButton.onPress();
    });

    expect(navigationFunctions.navigate).toBeCalledWith('signUp');
  });
});
