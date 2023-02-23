import { act, waitFor } from '@testing-library/react-native';
import { useTaskList } from '../../../../src/features/task-manager/task-list/useTaskList';
import { renderHook } from '../../../utils/renderHook';

import { navigationFunctions } from '../../../__mocks__/@react-navigation/native';
import {
  mockCompleteTask,
  mockDeleteTask,
  mockListTask,
  mockSignOut,
  mockedTask,
  AuthService,
  TasksService,
} from '../../../__mocks__/requests';

jest.mock('@react-native-firebase/auth', () => () => ({
  currentUser: {
    uid: '1234',
  },
}));

jest.mock('../../../../src/model/requests');

describe('useTaskList tests', () => {
  beforeEach(() => {
    mockListTask();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get tasks successfuly', async () => {
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.tasks).toStrictEqual([mockedTask]);
  });

  it('should complete task successfuly', async () => {
    const completedTask = { ...mockedTask, isCompleted: true };

    mockCompleteTask([undefined, completedTask]);
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.tasks).toStrictEqual([mockedTask]);

    mockListTask([undefined, [completedTask]]);

    await act(async () => {
      await result.current.onCompleteTask(mockedTask.id);
    });

    expect(TasksService.completeTask).toBeCalledWith({ taskId: mockedTask.id });
    expect(result.current.tasks).toStrictEqual([completedTask]);
  });

  it('should delete task successfuly', async () => {
    mockDeleteTask([undefined, true]);
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.tasks).toStrictEqual([mockedTask]);

    mockListTask([undefined, []]);

    await act(async () => {
      await result.current.onDeleteTask(mockedTask.id);
    });

    expect(TasksService.deleteTask).toBeCalledWith({ taskId: mockedTask.id });
    expect(result.current.tasks).toStrictEqual([]);
  });

  it('should navigate to createTask when press the main button', async () => {
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    act(() => {
      result.current.onMainButtonPress();
    });

    expect(navigationFunctions.navigate).toBeCalledWith('createTask');
  });

  it('should navigate to createTask when press the main button', async () => {
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    act(() => {
      result.current.onMainButtonPress();
    });

    expect(navigationFunctions.navigate).toBeCalledWith('createTask');
  });

  it('should execute sign out when press the sign out button', async () => {
    const { result } = renderHook(useTaskList);

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    act(() => {
      result.current.onSignOut();
    });

    expect(AuthService.signOut).toBeCalled();
  });
});
