import { Box, FlatList, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Header,
  Loading,
  Logo,
  ScreenContainer,
} from '../../../components';
import { DateHandler, useRequest } from '../../../helpers';
import { TaskCard } from './components/TaskCard';
import { Task } from '../../../model/models/Task';

export type TaskListTemplateProps = {
  tasks: Array<Task> | undefined;
  onCompleteTask: (itemId: string) => void;
  onDeleteTask: (itemId: string) => void;
  onMainButtonPress: () => void;
  feedback:
    | {
        type: 'success' | 'error';
        message: string;
      }
    | undefined;
  isLoading: boolean;
  onSignOut: () => void;
};

export const TaskListTemplate = (props: TaskListTemplateProps) => {
  const {
    tasks,
    onCompleteTask,
    onDeleteTask,
    onMainButtonPress,
    isLoading,
    feedback,
    onSignOut,
  } = props;
  const { t } = useTranslation();
  const today = DateHandler.formatDate(new Date(), 'WEEKDAY_DAY_AND_MONT');

  return (
    <ScreenContainer isLoading={isLoading} feedback={feedback}>
      <Header onSignOut={onSignOut} />
      <Box mb={8}>
        <Text fontSize={'xl'} mb={1}>
          {t('taskManager.taskList.title')}
        </Text>
        <Text fontSize="sm">{today}</Text>
      </Box>
      <Box flex={1} justifyContent="space-between">
        <FlatList<Task>
          data={tasks}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskCard
              {...item}
              onComplete={onCompleteTask}
              onDelete={onDeleteTask}
            />
          )}
        />

        <Box mt={6}>
          <Button
            label={t('taskManager.taskList.buttonLabel')}
            onPress={onMainButtonPress}
            icon="plus"
          />
        </Box>
      </Box>
    </ScreenContainer>
  );
};
