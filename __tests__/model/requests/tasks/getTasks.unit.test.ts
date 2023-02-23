import { getTasks } from '../../../../src/model/requests/tasks/getTasks';

import { TasksRepository } from '../../../../src/model/models/';
import { mockedTask } from '../../../__mocks__/requests';

jest.mock('@react-native-firebase/auth', () => () => ({
  currentUser: {
    uid: '1234',
  },
}));

jest.mock('@react-native-firebase/firestore', () => () => ({
  collection: () => null,
}));

const tasksRepositoryGetTasks = jest.spyOn(
  TasksRepository.prototype,
  'getTasksByUserId'
);

describe('getTasks tests', () => {
  it('should execute getTasks with success', async () => {
    tasksRepositoryGetTasks.mockImplementationOnce(() =>
      Promise.resolve([mockedTask])
    );

    const [error, response] = await getTasks({
      userId: 'correct-user-id',
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual([mockedTask]);
  });

  it('should execute getTasks and return a error', async () => {
    tasksRepositoryGetTasks.mockImplementationOnce(() =>
      Promise.reject('generic-error')
    );

    const [error, response] = await getTasks({
      userId: 'correct-user-id',
    });

    expect(error).toBe('generic-error');
    expect(response).toBeUndefined();
  });
});
