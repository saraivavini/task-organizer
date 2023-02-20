import { withHook } from '../../../helpers';
import { SignUpTemplate } from './SignUp.template';
import { useSignUp } from './useSignUp';

export const SignUpScreen = withHook(SignUpTemplate, useSignUp);
