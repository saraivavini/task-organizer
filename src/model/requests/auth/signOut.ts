import { Result, ValueOf } from '../Utility.types';
import { UsersRepository } from '../../models/User';

const ERROR_CODES = {
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type SignOutResponse = true;
type SignOutErrorCode = ValueOf<typeof ERROR_CODES>;
type SignOutReturn = Result<SignOutErrorCode, SignOutResponse>;

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function signOut(): Promise<SignOutReturn> {
  try {
    const usersRepository = new UsersRepository();

    await usersRepository.signOut();

    return [undefined, true];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
