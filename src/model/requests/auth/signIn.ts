import { Result, ValueOf } from '../Utility.types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UsersRepository } from '../../models/User';

const ERROR_CODES = {
  INVALID_EMAIL: 'auth/invalid-email',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type SignInResponse = {
  user: FirebaseAuthTypes.User;
};
type SignInErrorCode = ValueOf<typeof ERROR_CODES>;
type SignInReturn = Result<SignInErrorCode, SignInResponse>;

type SignInParams = {
  username: string;
  password: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function signIn({
  username,
  password,
}: SignInParams): Promise<SignInReturn> {
  try {
    const usersRepository = new UsersRepository();

    const response = await usersRepository.signIn({
      email: username,
      password,
    });

    return [undefined, response];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
