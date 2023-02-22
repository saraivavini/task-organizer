import { jest } from '@jest/globals';

export const navigationFunctions = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};

export const useNavigation = () => navigationFunctions;
