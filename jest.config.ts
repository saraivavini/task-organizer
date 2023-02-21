import type { Config } from '@jest/types';
// import { defaults } from 'jest-config';

process.env.TZ = 'America/Sao_Paulo';

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['text', 'lcov'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
  setupFiles: ['./jest.setup.ts'],
  transformIgnorePatterns: [],
  testPathIgnorePatterns: [
    '\\.snap$',
    '\\.mock',
    '<rootDir>/__tests__/__mocks__/',
    '<rootDir>/__tests__/dataBuilders/',
    '<rootDir>/__tests__/utils/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__mocks__/',
    '<rootDir>/__tests__/dataBuilders/',
    '<rootDir>/__tests__/utils/',
  ],
};

export default config;
