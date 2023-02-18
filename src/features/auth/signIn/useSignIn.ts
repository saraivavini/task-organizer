import { useState } from 'react';
import { SignInTemplateProps } from './SignIn.template';

export const useSignIn = (): SignInTemplateProps => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = () => {};

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
