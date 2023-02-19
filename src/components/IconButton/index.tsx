import { Pressable } from 'native-base';
import { FeatherIcon } from '../../@types';
import { Icon } from '../Icon';

type IconButtonProps = {
  icon: FeatherIcon;
  onPress: () => void;
};

export const IconButton = (props: IconButtonProps) => {
  const { icon, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <Icon size={6} color="red.400" name={icon} />
    </Pressable>
  );
};
