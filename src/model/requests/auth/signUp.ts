import auth from '@react-native-firebase/auth';
import { Result, ValueOf } from '../Utility.types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UsersRepository } from '../../models/User';

const ERROR_CODES = {
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type SignUpResponse = {
  user: FirebaseAuthTypes.User;
};
type SignUpErrorCode = ValueOf<typeof ERROR_CODES>;
type SignUpReturn = Result<SignUpErrorCode, SignUpResponse>;

type SignUpParams = {
  username: string;
  password: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function signUp({
  username,
  password,
}: SignUpParams): Promise<SignUpReturn> {
  try {
    const response = await UsersRepository().signUp({
      email: username,
      password,
    });

    return [undefined, response];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
