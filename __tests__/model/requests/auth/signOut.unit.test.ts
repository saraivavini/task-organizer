import { signOut } from '../../../../src/model/requests/auth/signOut';

import { UsersRepository } from '../../../../src/model/models/';

const usersRepositorySignOut = jest.spyOn(UsersRepository.prototype, 'signOut');

describe('signOut tests', () => {
  it('should execute sign in with success', async () => {
    usersRepositorySignOut.mockImplementationOnce(() => Promise.resolve());

    const [error, response] = await signOut();

    expect(error).toBeUndefined();
    expect(response).toBeTruthy();
  });

  it('should execute sign and return a error', async () => {
    usersRepositorySignOut.mockImplementationOnce(() =>
      Promise.reject('auth/generic-error')
    );

    const [error, response] = await signOut();

    expect(error).toBe('auth/generic-error');
    expect(response).toBeUndefined();
  });
});
