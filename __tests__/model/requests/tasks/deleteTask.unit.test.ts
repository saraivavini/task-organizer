import { deleteTask } from '../../../../src/model/requests/tasks/deleteTask';

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

const tasksRepositoryCreateTask = jest.spyOn(
  TasksRepository.prototype,
  'deleteTask'
);

describe('deleteTask tests', () => {
  it('should execute deleteTask with success', async () => {
    tasksRepositoryCreateTask.mockImplementationOnce(() => Promise.resolve());

    const [error, response] = await deleteTask({
      taskId: 'correct-id',
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual(true);
  });

  it('should execute deleteTask and return a error', async () => {
    tasksRepositoryCreateTask.mockImplementationOnce(() =>
      Promise.reject('generic-error')
    );

    const [error, response] = await deleteTask({
      taskId: 'correct-id',
    });

    expect(error).toBe('generic-error');
    expect(response).toBeUndefined();
  });
});
