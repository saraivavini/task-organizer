import { Box, KeyboardAvoidingView, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import {
  Button,
  DateTimePicker,
  Header,
  Input,
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
  feedback?: {
    type: 'error' | 'success';
    message: string;
  };
  isLoading: boolean;
  onGoBack: () => void;
};

export const CreateTaskTemplate = (props: CreateTaskTemplateProps) => {
  const {
    feedback,
    isLoading,
    onChangeDate,
    onChangeTime,
    onChangeTitle,
    onSubmit,
    task,
    onGoBack,
  } = props;

  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView flex={1}>
      <ScreenContainer isLoading={isLoading} feedback={feedback}>
        <Header showLogo onGoBack={onGoBack} />
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
    </KeyboardAvoidingView>
  );
};
