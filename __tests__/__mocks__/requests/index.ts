import * as requests from '../../../src/model/requests';
import { Task } from '../../../src/model/models/Task';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const TasksService = requests.TasksService as jest.Mocked<
  typeof requests.TasksService
>;
export const AuthService = requests.AuthService as jest.Mocked<
  typeof requests.AuthService
>;

export const mockedTask: Task = {
  date: new Date(),
  id: '1',
  isCompleted: false,
  title: 'mocked task',
  userId: '1234',
};

export const mockedUser = {
  uid: 'firebase-user-id',
  email: 'firebase@email.com',
  displayName: 'Firebase User',
} as FirebaseAuthTypes.User;

export function mockListTask(
  response: Awaited<ReturnType<typeof TasksService.getTasks>> = [
    undefined,
    [mockedTask],
  ]
) {
  return TasksService.getTasks.mockImplementationOnce(() =>
    Promise.resolve(response)
  );
}

export function mockDeleteTask(
  response: Awaited<ReturnType<typeof TasksService.deleteTask>> = [
    'generic-error',
    undefined,
  ]
) {
  return TasksService.deleteTask.mockImplementationOnce(() =>
    Promise.resolve(response)
  );
}

export function mockCompleteTask(
  response: Awaited<ReturnType<typeof TasksService.completeTask>> = [
    'generic-error',
    undefined,
  ]
) {
  return TasksService.completeTask.mockImplementationOnce(() =>
    Promise.resolve(response)
  );
}

export function mockSignOut(
  response: Awaited<ReturnType<typeof AuthService.signOut>> = [undefined, true]
) {
  return AuthService.signOut.mockImplementationOnce(() =>
    Promise.resolve(response)
  );
}

export function mockSignUp() {
  return AuthService.signUp.mockImplementationOnce(() =>
    Promise.resolve([undefined, { user: mockedUser }])
  );
}

export function mockSignIn() {
  return AuthService.signIn.mockImplementationOnce(() =>
    Promise.resolve([undefined, { user: mockedUser }])
  );
}
