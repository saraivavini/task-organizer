import { Pressable } from 'native-base';
import { IColors } from 'native-base/lib/typescript/theme/base/colors';
import { FeatherIcon } from '../../@types';
import { Icon } from '../Icon';

type IconButtonProps = {
  icon: FeatherIcon;
  color?: IColors;
  onPress: () => void;
  size?: number;
};

export const IconButton = (props: IconButtonProps) => {
  const { icon, onPress, color = 'muted.400', size = 6 } = props;

  return (
    <Pressable onPress={onPress}>
      <Icon size={size} color={color} name={icon} />
    </Pressable>
  );
};
