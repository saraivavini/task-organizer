import { useCallback, useEffect } from 'react';
import { useRequest } from '../../../helpers';
import { TasksService } from '../../../model/requests';
import auth from '@react-native-firebase/auth';
import { TaskListTemplateProps } from './TaskList.template';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAppNavigation } from '../../../routes/types';

export const useTaskList = (): TaskListTemplateProps => {
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

  return {
    tasks,
    onCompleteTask: handleCompleteTask,
    onDeleteTask: handleDeleteTask,
    onMainButtonPress: handleMainButtonPress,
    error,
    isLoading,
  };
};
