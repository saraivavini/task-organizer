import { signUp } from '../../../../src/model/requests/auth/signUp';

import { UsersRepository } from '../../../../src/model/models/';
import { mockedUser } from '../../../__mocks__/requests';

const usersRepositorySignUp = jest.spyOn(UsersRepository.prototype, 'signUp');

describe('signUp tests', () => {
  it('should execute sign in with success', async () => {
    usersRepositorySignUp.mockImplementationOnce(() =>
      Promise.resolve({ user: mockedUser })
    );

    const [error, response] = await signUp({
      username: 'correct-username',
      password: 'correct-password',
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual({ user: mockedUser });
  });

  it('should execute sign and return a error', async () => {
    usersRepositorySignUp.mockImplementationOnce(() =>
      Promise.reject('auth/generic-error')
    );

    const [error, response] = await signUp({
      username: 'correct-username',
      password: 'correct-password',
    });

    expect(error).toBe('auth/generic-error');
    expect(response).toBeUndefined();
  });
});
