import { Box, FlatList, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Button, Header, Logo } from '../../../components';
import { DateHandler, useRequest } from '../../../helpers';
import { TaskCard } from './components/TaskCard';
import { Task } from '../../../model/models/Task';

export type TaskListTemplateProps = {
  tasks: Array<Task> | undefined;
  onCompleteTask: (itemId: string) => void;
  onDeleteTask: (itemId: string) => void;
  onMainButtonPress: () => void;
  error?: string;
};

export const TaskListTemplate = (props: TaskListTemplateProps) => {
  const { tasks, onCompleteTask, onDeleteTask, onMainButtonPress } = props;
  const { t } = useTranslation();
  const today = DateHandler.formatDate(new Date(), 'WEEKDAY_DAY_AND_MONT');

  return (
    <Box safeArea flex={1} backgroundColor="white" px={6} pt={6}>
      <Box mb={8}>
        <Header />
        <Text fontSize={'xl'} mb={1}>
          {t('taskManager.taskList.title')}
        </Text>
        <Text fontSize="sm">{today}</Text>
      </Box>
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

      <Box mb={6}>
        <Button
          label={t('taskManager.taskList.buttonLabel')}
          onPress={onMainButtonPress}
          icon="plus"
        />
      </Box>
    </Box>
  );
};
