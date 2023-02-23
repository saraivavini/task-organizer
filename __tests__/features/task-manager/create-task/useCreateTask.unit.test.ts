import { act } from '@testing-library/react-native';
import { useCreateTask } from '../../../../src/features/task-manager/create-task/useCreateTask';
import { renderHook } from '../../../utils/renderHook';

import * as requests from '../../../../src/model/requests';
import { navigationFunctions } from '../../../__mocks__/@react-navigation/native';
import { Task } from '../../../../src/model/models/Task';

jest.mock('../../../../src/model/requests');
const TasksService = requests.TasksService as jest.Mocked<
  typeof requests.TasksService
>;

const mockTask: Task = {
  date: new Date(),
  id: '2',
  isCompleted: false,
  title: 'mocked task',
  userId: '1234',
};

function mockCreateTask(
  response: Awaited<ReturnType<typeof TasksService.createTask>> = [
    'generic-error',
    undefined,
  ]
) {
  return TasksService.createTask.mockImplementationOnce(() =>
    Promise.resolve(response)
  );
}

describe('useCreateTask tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should submit values when valid ', async () => {
    mockCreateTask([undefined, mockTask]);
    const { result } = renderHook(useCreateTask);

    const title = 'new title';
    const date = new Date(2000, 3, 20, 20, 20);

    await act(async () => {
      await result.current.onChangeTitle(title);
      await result.current.onChangeDate(date);
      await result.current.onChangeTime(date);
    });
    await act(async () => {
      await result.current.onSubmit();
    });

    expect(TasksService.createTask).toBeCalledWith({ title, date });
    expect(navigationFunctions.goBack).toBeCalled();
  });

  it('should return an error feedback when an error occurs on fetch', async () => {
    mockCreateTask(['generic-error', undefined]);
    const { result } = renderHook(useCreateTask);

    const title = 'new title';
    const date = new Date(2000, 3, 20, 20, 20);

    await act(async () => {
      await result.current.onChangeTitle(title);
      await result.current.onChangeDate(date);
      await result.current.onChangeTime(date);
    });
    await act(async () => {
      await result.current.onSubmit();
    });

    expect(TasksService.createTask).toBeCalledWith({ title, date });
    expect(result.current.feedback?.message).toBe('generic-error');
  });

  it('should navigate when execute onGoBack', () => {
    const { result } = renderHook(useCreateTask);

    act(() => {
      result.current.onGoBack();
    });

    expect(navigationFunctions.goBack).toBeCalled();
  });
});
