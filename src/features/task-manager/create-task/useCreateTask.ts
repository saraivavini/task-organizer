import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateHandler, useRequest } from '../../../helpers';
import { TasksService } from '../../../model/requests';
import { useAppNavigation } from '../../../routes/types';
import { CreateTaskTemplateProps } from './CreateTask.template';
import OneSignal from 'react-native-onesignal';

export const useCreateTask = (): CreateTaskTemplateProps => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [dateLimit, setDateLimit] = useState<Date>(new Date());
  const { error, execute, isLoading } = useRequest(TasksService.createTask);
  const navigation = useAppNavigation();

  const feedback = error
    ? ({
        type: 'error',
        message: t(error),
      } as const)
    : undefined;

  const handleChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleChangeTime = (newDate: Date) => {
    setDateLimit(DateHandler.setHoursAndMinutes(dateLimit, newDate));
  };

  const handleChangeDate = (newDate: Date) => {
    setDateLimit(DateHandler.setDayMonthAndYear(dateLimit, newDate));
  };

  const handleSubmit = async () => {
    const isValid = !!title && !!dateLimit;

    if (isValid) {
      await execute({ title, date: dateLimit });

      if (!error) {
        navigation.goBack();
      }
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    onChangeTime: handleChangeTime,
    onChangeDate: handleChangeDate,
    onChangeTitle: handleChangeTitle,
    onSubmit: handleSubmit,
    task: {
      title,
    },
    feedback,
    isLoading,
    onGoBack: handleGoBack,
  };
};
