import { useCallback, useEffect } from 'react';
import { DateHandler, useRequest } from '../../../helpers';
import { AuthService, TasksService } from '../../../model/requests';
import auth from '@react-native-firebase/auth';
import { TaskListTemplateProps } from './TaskList.template';
import { useFocusEffect } from '@react-navigation/native';
import { useAppNavigation } from '../../../routes/types';
import { useTranslation } from 'react-i18next';
import OneSignal from 'react-native-onesignal';

export const useTaskList = (): TaskListTemplateProps => {
  const { t } = useTranslation();
  const user = auth().currentUser;
  const navigation = useAppNavigation();
  const {
    execute: getTasks,
    response: tasks,
    error: getTasksError,
    isLoading: getTasksIsLoading,
  } = useRequest(TasksService.getTasks);
  const {
    execute: completeTask,
    error: completeTaskError,
    isLoading: completeTaskIsLoading,
  } = useRequest(TasksService.completeTask);
  const {
    execute: deleteTask,
    error: deleteTaskError,
    isLoading: deleteTaskIsLoading,
  } = useRequest(TasksService.deleteTask);
  const error = completeTaskError || getTasksError || deleteTaskError;
  const isLoading =
    deleteTaskIsLoading || getTasksIsLoading || completeTaskIsLoading;

  const feedback = !!error
    ? ({
        type: 'error',
        message: t(error),
      } as const)
    : undefined;

  const fetchTasks = () => {
    if (user?.uid) {
      getTasks({
        userId: user?.uid,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  const createTaskReminder = useCallback(() => {
    if (!tasks || tasks.length === 0) return;

    let nextToExpire = Number.POSITIVE_INFINITY;
    const tenMinutesFromNow = DateHandler.getTime(
      DateHandler.addMinutes(Date.now(), 10)
    );

    tasks.forEach((task) => {
      const timestamp = DateHandler.getTime(task.date);
      if (timestamp > tenMinutesFromNow) {
        nextToExpire = Math.min(nextToExpire, timestamp);
      }
    });

    OneSignal.sendTag('task_date_limit', String(nextToExpire));
  }, [tasks]);

  useFocusEffect(createTaskReminder);

  const handleCompleteTask = async (taskId: string) => {
    await completeTask({ taskId });
    fetchTasks();
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask({ taskId });
    fetchTasks();
  };

  const handleMainButtonPress = () => {
    navigation.navigate('createTask');
  };

  const handleSignOut = () => {
    AuthService.signOut();
  };

  return {
    tasks,
    onCompleteTask: handleCompleteTask,
    onDeleteTask: handleDeleteTask,
    onMainButtonPress: handleMainButtonPress,
    onSignOut: handleSignOut,
    feedback,
    isLoading,
  };
};
