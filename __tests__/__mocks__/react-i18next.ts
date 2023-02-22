export const useTranslation = (): any => ({
  t: (key: string): string => key,
  i18n: {
    exists: (key: string): string => key,
  },
});
