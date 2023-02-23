import { createTask } from '../../../../src/model/requests/tasks/createTask';

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
  'createTask'
);

describe('createTask tests', () => {
  it('should execute createTask with success', async () => {
    tasksRepositoryCreateTask.mockImplementationOnce(() =>
      Promise.resolve(mockedTask)
    );

    const [error, response] = await createTask({
      title: 'correct-title',
      date: new Date(),
    });

    expect(error).toBeUndefined();
    expect(response).toStrictEqual(mockedTask);
  });

  it('should execute createTask and return a error', async () => {
    tasksRepositoryCreateTask.mockImplementationOnce(() =>
      Promise.reject('generic-error')
    );

    const [error, response] = await createTask({
      title: 'correct-title',
      date: new Date(),
    });

    expect(error).toBe('generic-error');
    expect(response).toBeUndefined();
  });
});
