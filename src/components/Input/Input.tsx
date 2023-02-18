import { Input as NBInput, InputGroup, Stack, useTheme } from 'native-base';

import { FeatherIcon } from '../../@types';
import { Feather, InputLeftAddon } from './styles';

type InputProps = {
  icon?: FeatherIcon;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  type?: 'text' | 'password';
};

export const Input = (props: InputProps) => {
  const { icon, placeholder, value, onChange, type = 'text' } = props;

  const LeftComponent = () => {
    return icon ? (
      <InputLeftAddon>
        <Feather name={icon} />
      </InputLeftAddon>
    ) : null;
  };

  return (
    <Stack width="100%" alignItems="center">
      <InputGroup w="100%">
        <LeftComponent />
        <NBInput
          value={value}
          onChangeText={onChange}
          flex={1}
          size="2xl"
          variant="outline"
          placeholder={placeholder}
          type={type}
          borderTopRightRadius="8px"
          borderBottomRightRadius="8px"
        />
      </InputGroup>
    </Stack>
  );
};
