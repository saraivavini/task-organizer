import { jest } from '@jest/globals';
import { useEffect } from 'react';

export const navigationFunctions = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  isFocused: jest.fn().mockReturnValue(true),
};

export const useNavigation = () => navigationFunctions;
export const useIsFocused = jest.fn().mockReturnValue(true);

// simpler implementation of original useFocusEffect
export const useFocusEffect = (effect: () => any) => {
  const navigation = useNavigation();
  useEffect(() => {
    let cleanup: undefined | (() => void);
    const callback = () => {
      const destroy = effect();

      if (destroy === undefined || typeof destroy === 'function') {
        return destroy;
      }

      return undefined;
    };
    if (navigation.isFocused()) {
      cleanup = callback();
    }
    return () => {
      if (cleanup !== undefined) {
        cleanup();
      }
    };
  }, [effect, navigation]);
};
