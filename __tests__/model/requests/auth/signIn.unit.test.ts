import { signIn } from '../../../../src/model/requests/auth/signIn';

import { UsersRepository } from '../../../../src/model/models/';
import { mockedUser } from '../../../__mocks__/requests';

const usersRepositorySignIn = jest.spyOn(UsersRepository.prototype, 'signIn');

describe('signIn tests', () => {
  it('should execute sign in with success', async () => {
    usersRepositorySignIn.mockImplementationOnce(() =>
      Promise.resolve({ user: mockedUser })
    );

    const [error, response] = await signIn({
      username: 'correct-username',
      password: 'correct-password',
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual({ user: mockedUser });
  });

  it('should execute sign and return a error', async () => {
    usersRepositorySignIn.mockImplementationOnce(() =>
      Promise.reject('auth/generic-error')
    );

    const [error, response] = await signIn({
      username: 'correct-username',
      password: 'correct-password',
    });

    expect(error).toBe('auth/generic-error');
    expect(response).toBeUndefined();
  });
});
