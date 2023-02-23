import { completeTask } from '../../../../src/model/requests/tasks/completeTask';

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

const tasksRepositoryCompleteTask = jest.spyOn(
  TasksRepository.prototype,
  'completeTask'
);

describe('completeTask tests', () => {
  it('should execute completeTask with success', async () => {
    tasksRepositoryCompleteTask.mockImplementationOnce(() =>
      Promise.resolve(mockedTask)
    );

    const [error, response] = await completeTask({
      taskId: 'task-id',
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual(mockedTask);
  });

  it('should execute completeTask and return a error', async () => {
    tasksRepositoryCompleteTask.mockImplementationOnce(() =>
      Promise.reject('generic-error')
    );

    const [error, response] = await completeTask({
      taskId: 'task-id',
    });

    expect(error).toBe('generic-error');
    expect(response).toBeUndefined();
  });
});
