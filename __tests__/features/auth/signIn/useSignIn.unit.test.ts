import { act } from '@testing-library/react-native';
import { useSignIn } from '../../../../src/features/auth/signIn/useSignIn';
import { renderHook } from '../../../utils/renderHook';

describe('useSignIn tests', () => {
  it('should change username input value', () => {
    const { result } = renderHook(useSignIn);

    act(() => {
      result.current.username.onChange('new username');
    });

    expect(result.current.username.value).toBe('new username');
  });

  it('should change password input value', () => {
    const { result } = renderHook(useSignIn);

    act(() => {
      result.current.password.onChange('new password');
    });

    expect(result.current.password.value).toBe('new password');
  });
});
