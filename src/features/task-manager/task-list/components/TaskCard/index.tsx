import { Box, Checkbox, Divider, HStack, Text } from 'native-base';
import { Icon, IconButton } from '../../../../../components';
import { DateHandler } from '../../../../../helpers';

type TaskCardProps = {
  date: Date;
  id: string;
  isCompleted: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  title: string;
};

export const TaskCard = (props: TaskCardProps) => {
  const { id, isCompleted, onComplete, onDelete, title, date } = props;

  const formattedHour = DateHandler.formatDate(date, 'HOUR_WITH_MINUTES');
  const formattedDate = DateHandler.formatDate(date, 'DAY_WITH_MONTH');

  const handleComplete = () => {
    onComplete(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Box
      borderColor="muted.300"
      borderWidth="1"
      borderRadius="sm"
      borderLeftColor={isCompleted ? 'success.600' : 'brand.primary'}
      borderLeftWidth={'5px'}
      mb={4}
      testID="task-card-container"
    >
      <HStack px={6} pb={4} pt={6}>
        <Checkbox
          testID="task-card-complete-check"
          value="isCompleted"
          size="lg"
          aria-label="isCompleted"
          mr={4}
          colorScheme="success"
          isChecked={isCompleted}
          onChange={handleComplete}
        />
        <Text
          flex={1}
          fontSize="md"
          textDecorationLine={isCompleted ? 'line-through' : 'none'}
          testID="task-card-title"
        >
          {title}
        </Text>
        <IconButton
          testID="task-card-delete-button"
          icon="trash"
          onPress={handleDelete}
          color="red.500"
        />
      </HStack>
      <Divider color="muted.300" />
      <HStack py={4} px={4} space={4}>
        <HStack space="1" alignItems={'center'} testID="task-card-time-limit">
          <Icon size={4} name="clock" />
          <Text>{formattedHour}</Text>
        </HStack>

        <HStack space="1" alignItems={'center'} testID="task-card-date-limit">
          <Icon size={4} name="calendar" />
          <Text fontSize="sm">{formattedDate}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};
