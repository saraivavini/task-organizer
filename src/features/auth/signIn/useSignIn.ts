import { useState } from 'react';
import { SignInTemplateProps } from './SignIn.template';
import { AuthService } from '../../../model/requests';
import { useFeedback, useRequest } from '../../../helpers';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '../../../routes/types';

export const useSignIn = (): SignInTemplateProps => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { error, execute, isLoading } = useRequest(AuthService.signIn);
  const { feedback } = useFeedback({
    error,
    translationPrefix: 'auth.signIn.feedbacks',
  });

  const handleSubmit = async () => {
    execute({
      username: usernameValue,
      password: passwordValue,
    });
  };

  const handleGoToSignUp = () => {
    navigation.navigate('signUp');
  };

  return {
    username: {
      value: usernameValue,
      onChange: setUsernameValue,
    },
    password: {
      value: passwordValue,
      onChange: setPasswordValue,
    },
    button: {
      label: t('auth.signIn.buttonLabel'),
      onPress: handleSubmit,
    },
    secondaryButton: {
      label: t('auth.signIn.secondaryButtonLabel'),
      onPress: handleGoToSignUp,
    },
    feedback,
    isLoading,
  };
};
