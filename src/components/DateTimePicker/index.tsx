import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Box, Pressable, Text, Modal } from 'native-base';
import { useState } from 'react';
import { Platform } from 'react-native';
import { DateHandler } from '../../helpers';
import { Input } from '../Input';

type DateTimePickerProps = {
  type?: 'date' | 'time';
  label?: string | null;
  onChange?: (date: Date) => void;
};

const formatByTypeMapping = {
  date: 'DAY_MONTH_YEAR',
  time: 'HOUR_WITH_MINUTES',
} as const;

const iconByTypeMapping = {
  date: 'calendar',
  time: 'clock',
} as const;

export const DateTimePicker = (props: DateTimePickerProps) => {
  const { type = 'date', label, onChange = () => null } = props;

  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  const formattedDate = DateHandler.formatDate(date, formatByTypeMapping[type]);

  const handleChange = (_: DateTimePickerEvent, newDate?: Date) => {
    if (newDate) {
      setDate(newDate);

      setIsVisible(Platform.OS === 'ios');
    }
  };

  const toggleVisible = () => {
    setIsVisible(!isVisible);
    onChange(date);
  };

  const display = Platform.OS === 'ios' ? 'spinner' : 'default';

  return (
    <Box>
      <Input
        label={label}
        isReadOnly
        value={formattedDate}
        icon={iconByTypeMapping[type]}
        onPress={toggleVisible}
      />
      <Modal isOpen={isVisible} onClose={toggleVisible}>
        <Modal.Content>
          <RNDateTimePicker
            display={display}
            value={date}
            mode={type}
            onChange={handleChange}
            is24Hour
          />
        </Modal.Content>
      </Modal>
    </Box>
  );
};
