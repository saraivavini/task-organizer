import { useEffect } from 'react';
import { useRequest } from '../../../helpers';
import { TasksService } from '../../../model/requests';
import auth from '@react-native-firebase/auth';
import { TaskListTemplateProps } from './TaskList.template';
import { useNavigation } from '@react-navigation/native';
import { useAppNavigation } from '../../../routes/types';

export const useTaskList = (): TaskListTemplateProps => {
  const user = auth().currentUser;
  const { fetchRequest: fetchTasks, response: tasks } = useRequest(
    TasksService.getTasks
  );
  const navigation = useAppNavigation();

  useEffect(() => {
    if (user?.uid) {
      fetchTasks({
        userId: user?.uid,
      });
    }
  }, []);

  const handleCompleteTask = (taskId: string) => {};

  const handleDeleteTask = (taskId: string) => {};

  const handleMainButtonPress = () => {
    navigation.navigate('createTask');
  };

  return {
    tasks,
    onCompleteTask: handleCompleteTask,
    onDeleteTask: handleDeleteTask,
    onMainButtonPress: handleMainButtonPress,
  };
};
