import { Box, Stack, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Logo, ScreenContainer } from '../../../components';
import { AuthForm, AuthFormProps } from '../components';

export type SignInTemplateProps = {
  isLoading: boolean;
  feedback?: {
    type: 'success' | 'error';
    message: string;
  };
  secondaryButton: {
    label: string;
    onPress: () => void;
  };
} & AuthFormProps;

export const SignInTemplate = (props: SignInTemplateProps) => {
  const { password, username, button, feedback, isLoading, secondaryButton } =
    props;

  const { t } = useTranslation();

  return (
    <ScreenContainer isLoading={isLoading} feedback={feedback}>
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
      <AuthForm password={password} username={username} button={button} />
      <Box mt={6}>
        <Button
          variant="link"
          label={secondaryButton.label}
          onPress={secondaryButton.onPress}
        />
      </Box>
    </ScreenContainer>
  );
};
