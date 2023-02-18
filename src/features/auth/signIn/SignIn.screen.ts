import { withHook } from '../../../helpers/withHook';
import { SignInTemplate } from './SignIn.template';
import { useSignIn } from './useSignIn';

export const SignInScreen = withHook(SignInTemplate, useSignIn);
