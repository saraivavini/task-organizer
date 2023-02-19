import { Box, Checkbox, Divider, HStack, Text } from 'native-base';
import { Icon } from '../../../../../components';
import { DateHandler } from '../../../../../helpers';

type TaskCardProps = {
  date: string;
  id: string;
  isCompleted: boolean;
  onComplete: () => void;
  onDelete: () => void;
  title: string;
};

export const TaskCard = (props: TaskCardProps) => {
  const { id, isCompleted, onComplete, onDelete, title, date } = props;

  const formattedHour = DateHandler.formatDate(
    new Date(date),
    'HOUR_WITH_MINUTES'
  );
  const formattedDate = DateHandler.formatDate(
    new Date(date),
    'DAY_WITH_MONTH'
  );

  return (
    <Box
      borderColor="muted.300"
      borderWidth="1"
      borderRadius="sm"
      borderLeftColor={isCompleted ? 'success.600' : 'brand.primary'}
      borderLeftWidth={'5px'}
      mb={4}
    >
      <HStack px={6} pb={4} pt={6}>
        <Checkbox.Group
          onChange={onComplete}
          value={[isCompleted ? 'isCompleted' : '']}
        >
          <Checkbox
            value="isCompleted"
            size="lg"
            aria-label="isCompleted"
            mr={4}
            colorScheme="success"
          />
        </Checkbox.Group>
        <Text
          flex={1}
          fontSize="md"
          textDecorationLine={isCompleted ? 'line-through' : 'none'}
        >
          {title}
        </Text>
      </HStack>
      <Divider color="muted.300" />
      <HStack py={4} px={4} space={4}>
        <HStack space="1" alignItems={'center'}>
          <Icon size={4} name="clock" />
          <Text>{formattedHour}</Text>
        </HStack>

        <HStack space="1" alignItems={'center'}>
          <Icon size={4} name="calendar" />
          <Text fontSize="sm">{formattedDate}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};
