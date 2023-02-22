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
  onChange?: (text: string) => void;
  type?: 'text' | 'password' | 'email';
  label?: string | null;
  isReadOnly?: boolean;
  onPress?: () => void;
  testID?: string;
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
    autoCorrect: false,
  },
} as const;

export const Input = (props: InputProps) => {
  const {
    icon,
    placeholder,
    value,
    onChange,
    type = 'text',
    label,
    isReadOnly = false,
    onPress,
    testID,
  } = props;

  const LeftComponent = () => {
    return icon ? (
      <InputLeftAddon testID="input-left-addon">
        <Icon name={icon} testID="input-left-icon" />
      </InputLeftAddon>
    ) : null;
  };

  const Label = () => {
    return label ? (
      <FormControl.Label testID="input-label">{label}</FormControl.Label>
    ) : null;
  };

  return (
    <Stack width="100%" alignItems="center">
      <FormControl>
        <Label />
        <InputGroup w="100%">
          <LeftComponent />
          <NBInput
            testID={testID || 'input'}
            value={value}
            onChangeText={onChange}
            flex={1}
            size="2xl"
            variant="outline"
            placeholder={placeholder}
            borderRadius="8px"
            isReadOnly={isReadOnly}
            onPressIn={onPress}
            {...inputTypeMapping[type]}
          />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};
