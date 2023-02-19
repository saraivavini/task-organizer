import { withHook } from '../../../helpers/withHook';
import { TaskListTemplate } from './TaskList.template';
import { useTaskList } from './useTaskList';

export const TaskListScreen = withHook(TaskListTemplate, useTaskList);
