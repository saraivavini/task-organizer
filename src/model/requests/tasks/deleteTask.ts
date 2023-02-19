import { Result, ValueOf } from '../Utility.types';
import { Task, TasksRespository } from '../../models/Task';

const ERROR_CODES = {
  GENERIC_ERROR: 'auth/generic-error',
} as const;

type DeleteTaskResponse = true;
type DeleteTaskErrorCode = ValueOf<typeof ERROR_CODES>;
type DeleteTaskReturn = Result<DeleteTaskErrorCode, DeleteTaskResponse>;

type DeleteTaskParams = {
  taskId: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function deleteTask({
  taskId,
}: DeleteTaskParams): Promise<DeleteTaskReturn> {
  try {
    await TasksRespository().deleteTask(taskId);

    return [undefined, true];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
