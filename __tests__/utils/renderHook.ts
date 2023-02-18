import { renderHook as renderHookDefault } from '@testing-library/react-hooks';
import { AppProvider } from './AppProvider';

export const renderHook = <T>(hook: () => T) => {
  return renderHookDefault(hook, {
    wrapper: AppProvider,
  });
};
