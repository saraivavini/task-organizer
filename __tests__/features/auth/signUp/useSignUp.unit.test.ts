import { act } from '@testing-library/react-native';
import { useSignUp } from '../../../../src/features/auth/signUp/useSignUp';
import { renderHook } from '../../../utils/renderHook';

import * as requests from '../../../../src/model/requests';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { navigationFunctions } from '../../../__mocks__/@react-navigation/native';

jest.mock('../../../../src/model/requests');
const AuthService = requests.AuthService as jest.Mocked<
  typeof requests.AuthService
>;
AuthService.signUp.mockImplementationOnce(() =>
  Promise.resolve([undefined, { user: {} as FirebaseAuthTypes.User }])
);

describe('useSignUp tests', () => {
  it('should change username and input value', () => {
    const { result } = renderHook(useSignUp);

    act(() => {
      result.current.username.onChange('new username');
      result.current.password.onChange('new password');
    });

    expect(result.current.username.value).toBe('new username');
    expect(result.current.password.value).toBe('new password');
  });

  it('should submit the form when press the main button', () => {
    const { result } = renderHook(useSignUp);

    act(() => {
      result.current.button.onPress();
    });

    expect(AuthService.signUp).toBeCalled();
  });

  it('should navigate when execute onGoBack', () => {
    const { result } = renderHook(useSignUp);

    act(() => {
      result.current.onGoBack();
    });

    expect(navigationFunctions.goBack).toBeCalled();
  });
});
