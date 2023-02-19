import { Box } from 'native-base';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <Box mb={6}>
      <Logo size="small" />
    </Box>
  );
};
