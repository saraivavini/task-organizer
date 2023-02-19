import { withHook } from '../../../helpers';
import { CreateTaskTemplate } from './CreateTask.template';
import { useCreateTask } from './useCreateTask';

export const CreateTaskScreen = withHook(CreateTaskTemplate, useCreateTask);
