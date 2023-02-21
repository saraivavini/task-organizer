import { Box } from 'native-base';
import { IconButton } from '../IconButton';
import { Logo } from '../Logo';

type HeaderProps = {
  onGoBack?: () => void;
  onSignOut?: () => void;
  showLogo?: boolean;
};

export const Header = (props: HeaderProps) => {
  const { onGoBack, onSignOut, showLogo } = props;

  const GoBackButton = () => {
    return onGoBack ? (
      <IconButton
        testID="go-back-button"
        icon="x"
        onPress={onGoBack}
        color="coolGray.800"
      />
    ) : null;
  };

  const SignOutButton = () => {
    return onSignOut ? (
      <IconButton
        testID="sign-out-button"
        icon="log-out"
        onPress={onSignOut}
        color="coolGray.900"
      />
    ) : null;
  };

  return (
    <Box
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      mb={6}
    >
      <Box flex={1}>{showLogo ? <Logo size="small" /> : null}</Box>
      <Box>
        <GoBackButton />
        <SignOutButton />
      </Box>
    </Box>
  );
};
