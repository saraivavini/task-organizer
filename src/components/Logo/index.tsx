import { HStack, Text } from 'native-base';
import { Icon } from '../Icon';

type LogoProps = {
  size?: 'small' | 'medium';
};

const sizeMapping = {
  small: 10,
  medium: 20,
} as const;

export const Logo = (props: LogoProps) => {
  const { size = 'medium' } = props;

  const appName = `Task${size === 'medium' ? '\n' : ' '}Organizer`;

  return (
    <HStack alignItems="center" space={2} testID="logo-image">
      <Icon size={sizeMapping[size]} color="brand.400" name="check-square" />
      <Text fontSize="xl" bold color="brand.400">
        {appName}
      </Text>
    </HStack>
  );
};
