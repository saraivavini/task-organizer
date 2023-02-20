import { useState } from 'react';
import { AuthService } from '../../../model/requests';
import { useFeedback, useRequest } from '../../../helpers';
import { useTranslation } from 'react-i18next';
import { SignUpTemplateProps } from './SignUp.template';
import { useAppNavigation } from '../../../routes/types';

export const useSignUp = (): SignUpTemplateProps => {
  const { t } = useTranslation();
  const navigation = useAppNavigation();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { error, execute, isLoading } = useRequest(AuthService.signUp);
  const { feedback } = useFeedback({
    error,
    translationPrefix: 'auth.signUp.feedbacks',
  });

  const handleSubmit = async () => {
    execute({
      username: usernameValue,
      password: passwordValue,
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
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
      label: t('auth.signUp.buttonLabel'),
      onPress: handleSubmit,
    },
    feedback,
    isLoading,
    onGoBack: handleGoBack,
  };
};
