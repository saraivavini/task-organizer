import { Box, Text, VStack } from 'native-base';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  DateTimePicker,
  Header,
  Input,
  Loading,
  ScreenContainer,
} from '../../../components';

export type CreateTaskTemplateProps = {
  task: {
    title: string;
  };
  onChangeTime: (newDate: Date) => void;
  onChangeDate: (newDate: Date) => void;
  onChangeTitle: (newTitle: string) => void;
  onSubmit: () => Promise<void>;
  error: string | undefined;
  isLoading: boolean;
};

export const CreateTaskTemplate = (props: CreateTaskTemplateProps) => {
  const {
    error,
    isLoading,
    onChangeDate,
    onChangeTime,
    onChangeTitle,
    onSubmit,
    task,
  } = props;

  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <Loading isVisible={isLoading} />
      <Header />
      <Box>
        <Text fontSize="xl">{t('taskManager.createTask.title')}</Text>
        <Text fontSize="sm">{t('taskManager.createTask.subtitle')}</Text>
      </Box>
      <VStack flex={1} mt={10} space={8}>
        <Input
          icon="clipboard"
          label={t('taskManager.createTask.inputLabels.taskDescription')}
          value={task.title}
          onChange={onChangeTitle}
        />
        <DateTimePicker
          label={t('taskManager.createTask.inputLabels.hourLimit')}
          type="time"
          onChange={onChangeTime}
        />
        <DateTimePicker
          label={t('taskManager.createTask.inputLabels.dateLimit')}
          type="date"
          onChange={onChangeDate}
        />
      </VStack>
      <Button
        label={t('taskManager.createTask.buttonLabel')}
        icon="save"
        onPress={onSubmit}
      />
    </ScreenContainer>
  );
};
