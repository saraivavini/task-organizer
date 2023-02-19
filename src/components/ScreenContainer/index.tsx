import { Box } from 'native-base';

type ScreenContainerProps = {
  children?: React.ReactNode;
};

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <Box safeArea flex={1} backgroundColor="white" px={6} pt={6}>
      {children}
    </Box>
  );
};
