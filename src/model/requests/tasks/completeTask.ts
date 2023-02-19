import { Result, ValueOf } from '../Utility.types';
import { Task, TasksRespository } from '../../models/Task';

const ERROR_CODES = {
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type CompleteTaskResponse = Array<Task>;
type CompleteTaskErrorCode = ValueOf<typeof ERROR_CODES>;
type CompleteTaskReturn = Result<CompleteTaskErrorCode, CompleteTaskResponse>;

type CompleteTaskParams = {
  userId: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function getTasks({
  userId,
}: CompleteTaskParams): Promise<CompleteTaskReturn> {
  try {
    const response = await TasksRespository().getTasksByUserId(userId);

    return [undefined, response];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
