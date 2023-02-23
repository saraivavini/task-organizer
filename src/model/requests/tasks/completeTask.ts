import { Result, ValueOf } from '../Utility.types';
import { Task, TasksRespository } from '../../models/Task';

const ERROR_CODES = {
  GENERIC_ERROR: 'generic-error',
} as const;

type CompleteTaskResponse = Task;
type CompleteTaskErrorCode = ValueOf<typeof ERROR_CODES>;
type CompleteTaskReturn = Result<CompleteTaskErrorCode, CompleteTaskResponse>;

type CompleteTaskParams = {
  taskId: string;
};

function getError(error: { code: string }) {
  const { code } = error;

  const mappedError = Object.values(ERROR_CODES).find((err) => err === code);

  return mappedError || ERROR_CODES.GENERIC_ERROR;
}

export async function completeTask({
  taskId,
}: CompleteTaskParams): Promise<CompleteTaskReturn> {
  try {
    const response = await TasksRespository().completeTask(taskId);

    return [undefined, response];
  } catch (error: any) {
    return [getError(error), undefined];
  }
}
