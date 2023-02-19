import { useState } from 'react';
import { SignInTemplateProps } from './SignIn.template';
import auth from '@react-native-firebase/auth';
import { AuthService } from '../../../model/requests';

export const useSignIn = (): SignInTemplateProps => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const [error, response] = await AuthService.signUp({
      username: usernameValue,
      password: passwordValue,
    });

    console.log({ error, response, usernameValue, passwordValue });
    setIsLoading(false);
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
    onSubmit: handleSubmit,
  };
};
