import { Box, Text, VStack } from 'native-base';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  DateTimePicker,
  Header,
  Input,
  ScreenContainer,
} from '../../../components';
import { DateHandler, useRequest } from '../../../helpers';
import { TasksService } from '../../../model/requests';
import { useAppNavigation } from '../../../routes/types';

export const CreateTaskTemplate = () => {
  const { t } = useTranslation();

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDateLimit, setTaskDateLimit] = useState<Date>(new Date());
  const { error, execute } = useRequest(TasksService.createTask);
  const navigation = useAppNavigation();

  const handleChangeTime = (newDate: Date) => {
    setTaskDateLimit(DateHandler.setHoursAndMinutes(taskDateLimit, newDate));
  };

  const handleChangeDate = (newDate: Date) => {
    setTaskDateLimit(DateHandler.setDayMonthAndYear(taskDateLimit, newDate));
  };

  const handleSubmit = async () => {
    const isValid = !!taskTitle && !!taskDateLimit;

    if (isValid) {
      await execute({ title: taskTitle, date: taskDateLimit });

      if (!error) {
        navigation.goBack();
      }
    }
  };

  return (
    <ScreenContainer>
      <Header />
      <Box>
        <Text fontSize="xl">{t('taskManager.createTask.title')}</Text>
        <Text fontSize="sm">{t('taskManager.createTask.subtitle')}</Text>
      </Box>
      <VStack flex={1} mt={10} space={8}>
        <Input
          icon="clipboard"
          label={t('taskManager.createTask.inputLabels.taskDescription')}
          value={taskTitle}
          onChange={setTaskTitle}
        />
        <DateTimePicker
          label={t('taskManager.createTask.inputLabels.hourLimit')}
          type="time"
          onChange={handleChangeTime}
        />
        <DateTimePicker
          label={t('taskManager.createTask.inputLabels.dateLimit')}
          type="date"
          onChange={handleChangeDate}
        />
      </VStack>
      <Button
        label={t('taskManager.createTask.buttonLabel')}
        icon="save"
        onPress={handleSubmit}
      />
    </ScreenContainer>
  );
};
