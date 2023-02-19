import { Button as NBButton, Text, Icon as NBIcon } from 'native-base';
import { FeatherIcon } from '../../@types';
import { Icon } from '../Icon';

export type ButtonProps = {
  icon?: FeatherIcon;
  label: string;
  onPress: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, onPress, icon } = props;

  return (
    <NBButton
      colorScheme="brand"
      size="lg"
      borderRadius="8px"
      onPress={onPress}
      leftIcon={icon ? <Icon size={6} name={icon} /> : undefined}
    >
      <Text fontSize="lg" fontWeight="medium" color="white">
        {label}
      </Text>
    </NBButton>
  );
};
