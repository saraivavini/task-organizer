import { Box, Stack, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Logo, ScreenContainer } from '../../../../components';

type AuthInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export type AuthFormProps = {
  username: AuthInputProps;
  password: AuthInputProps;
  button: {
    label: string;
    onPress: () => void;
  };
};

export const AuthForm = (props: AuthFormProps) => {
  const { username, password, button } = props;

  return (
    <Box>
      <Stack
        space={6}
        mt={{
          base: 8,
          sm: 16,
        }}
      >
        <Input
          icon="user"
          type="email"
          placeholder="Username"
          value={username.value}
          onChange={username.onChange}
        />
        <Input
          icon="lock"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
          type="password"
        />
      </Stack>

      <Box mt={16}>
        <Button onPress={button.onPress} label={button.label} />
      </Box>
    </Box>
  );
};
