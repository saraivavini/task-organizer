import { Button as NBButton, Text, Icon as NBIcon } from 'native-base';
import { FeatherIcon } from '../../@types';
import { Icon } from '../Icon';

export type ButtonProps = {
  icon?: FeatherIcon;
  label: string;
  onPress: () => void;
  variant?: 'solid' | 'link';
};

export const Button = (props: ButtonProps) => {
  const { label, onPress, icon, variant = 'solid' } = props;

  return (
    <NBButton
      colorScheme="brand"
      size="lg"
      borderRadius="8px"
      onPress={onPress}
      leftIcon={icon ? <Icon size={6} name={icon} /> : undefined}
      variant={variant}
      _text={{
        fontSize: 'lg',
        fontWeight: 'medium',
      }}
    >
      {label}
    </NBButton>
  );
};
