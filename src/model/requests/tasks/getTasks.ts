import { Result, ValueOf } from '../Utility.types';
import { Task, TasksRespository } from '../../models/Task';

const ERROR_CODES = {
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type GetTasksResponse = Array<Task>;
type GetTasksErrorCode = ValueOf<typeof ERROR_CODES>;
type GetTasksReturn = Result<GetTasksErrorCode, GetTasksResponse>;

type GetTasksParams = {
  userId: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function getTasks({
  userId,
}: GetTasksParams): Promise<GetTasksReturn> {
  try {
    const response = await TasksRespository().getTasksByUserId(userId);

    return [undefined, response];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
