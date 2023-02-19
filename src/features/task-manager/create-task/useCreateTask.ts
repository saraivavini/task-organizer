import { useState } from 'react';
import { DateHandler, useRequest } from '../../../helpers';
import { TasksService } from '../../../model/requests';
import { useAppNavigation } from '../../../routes/types';
import { CreateTaskTemplateProps } from './CreateTask.template';

export const useCreateTask = (): CreateTaskTemplateProps => {
  const [title, setTitle] = useState('');
  const [dateLimit, setDateLimit] = useState<Date>(new Date());
  const { error, execute, isLoading } = useRequest(TasksService.createTask);
  const navigation = useAppNavigation();

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

  return {
    onChangeTime: handleChangeTime,
    onChangeDate: handleChangeDate,
    onChangeTitle: handleChangeTitle,
    onSubmit: handleSubmit,
    task: {
      title,
    },
    error,
    isLoading,
  };
};
