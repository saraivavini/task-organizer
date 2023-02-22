jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    };
  },
}));

export {};
