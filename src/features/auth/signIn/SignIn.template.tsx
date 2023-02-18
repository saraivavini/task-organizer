import { Box, Stack, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Logo } from '../../../components';

type InputTextProps = {
  value: string;
  onChange: (value: string) => void;
};

export type SignInTemplateProps = {
  username: InputTextProps;
  password: InputTextProps;
  onSubmit: () => void;
};

export const SignInTemplate = (props: SignInTemplateProps) => {
  const { password, username, onSubmit } = props;

  const { t } = useTranslation();

  return (
    <Box safeArea flex={1} backgroundColor="white" px={6} pt={6}>
      <Logo />
      <Text
        mt={{
          base: 8,
          sm: 16,
        }}
        fontSize="2xl"
      >
        {t('auth.signIn.title')}
      </Text>
      <Stack
        space={6}
        mt={{
          base: 8,
          sm: 16,
        }}
      >
        <Input
          icon="user"
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
        <Button onPress={onSubmit} label={t('auth.signIn.buttonLabel')} />
      </Box>
    </Box>
  );
};
