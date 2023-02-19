import { Icon as NBIcon } from 'native-base';
import { FeatherIcon } from '../../@types';
import Feather from '@expo/vector-icons/Feather';
import { IColors } from 'native-base/lib/typescript/theme/base/colors';

type IconProps = {
  name: FeatherIcon;
  size?: number;
  color?: IColors;
};

export const Icon = (props: IconProps) => {
  const { name, size, color = 'muted.400' } = props;

  return <NBIcon as={Feather} color={color} name={name} size={size} />;
};
