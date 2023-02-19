import {
  FormControl,
  Input as NBInput,
  InputGroup,
  Stack,
  useTheme,
} from 'native-base';

import { FeatherIcon } from '../../@types';
import { Icon } from '../Icon';
import { InputLeftAddon } from './styles';

type InputProps = {
  icon?: FeatherIcon;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  type?: 'text' | 'password' | 'email';
  label?: string | null;
};

const inputTypeMapping = {
  text: {
    type: 'text',
  },
  password: {
    type: 'password',
  },
  email: {
    type: 'text',
    autoCapitalize: 'none',
  },
} as const;

export const Input = (props: InputProps) => {
  const { icon, placeholder, value, onChange, type = 'text', label } = props;

  const LeftComponent = () => {
    return icon ? (
      <InputLeftAddon>
        <Icon name={icon} />
      </InputLeftAddon>
    ) : null;
  };

  const Label = () => {
    return label ? <FormControl.Label>{label}</FormControl.Label> : null;
  };

  return (
    <Stack width="100%" alignItems="center">
      <FormControl>
        <Label />
        <InputGroup w="100%">
          <LeftComponent />
          <NBInput
            value={value}
            onChangeText={onChange}
            flex={1}
            size="2xl"
            variant="outline"
            placeholder={placeholder}
            borderRadius="8px"
            {...inputTypeMapping[type]}
          />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};
