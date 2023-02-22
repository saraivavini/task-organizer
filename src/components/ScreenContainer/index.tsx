import { Alert, Box, Collapse } from 'native-base';
import { Loading } from '../Loading';

type ScreenContainerProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
  feedback?: {
    type: 'error' | 'success';
    message: string;
  };
};

export const ScreenContainer = (props: ScreenContainerProps) => {
  const { children, isLoading = false, feedback } = props;

  const Feedback = () => {
    if (!feedback) return null;

    return (
      <Collapse isOpen={!!feedback}>
        <Alert testID="feedback-alert" status={feedback.type}>
          {feedback.message}
        </Alert>
      </Collapse>
    );
  };

  return (
    <Box safeArea flex={1} backgroundColor="white">
      <Loading isVisible={isLoading} />
      <Feedback />
      <Box px={6} pt={6} pb={6} flex={1}>
        {children}
      </Box>
    </Box>
  );
};
