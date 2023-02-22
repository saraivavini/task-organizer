import { Icon as NBIcon, IIconProps as NBIconProps } from 'native-base';
import { FeatherIcon } from '../../@types';
import Feather from '@expo/vector-icons/Feather';

type IconProps = {
  testID?: string;
  name: FeatherIcon;
} & Pick<NBIconProps, 'color' | 'size'>;

export const Icon = (props: IconProps) => {
  const { name, size, color = 'muted.400', testID } = props;

  return (
    <NBIcon
      as={Feather}
      testID={testID}
      color={color}
      name={name}
      size={size}
    />
  );
};
