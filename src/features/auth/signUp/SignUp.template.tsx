import { Box, Stack, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Header,
  Input,
  Logo,
  ScreenContainer,
} from '../../../components';
import { AuthForm, AuthFormProps } from '../components';

export type SignUpTemplateProps = {
  isLoading: boolean;
  feedback?: {
    type: 'success' | 'error';
    message: string;
  };
  onGoBack: () => void;
} & AuthFormProps;

export const SignUpTemplate = (props: SignUpTemplateProps) => {
  const { password, username, button, feedback, isLoading, onGoBack } = props;

  const { t } = useTranslation();

  return (
    <ScreenContainer isLoading={isLoading} feedback={feedback}>
      <Header onGoBack={onGoBack} />
      <Logo />
      <Text
        mt={{
          base: 8,
          sm: 16,
        }}
        fontSize="2xl"
      >
        {t('auth.signUp.title')}
      </Text>
      <AuthForm password={password} username={username} button={button} />
    </ScreenContainer>
  );
};
