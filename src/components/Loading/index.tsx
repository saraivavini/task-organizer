import { Modal, Spinner } from 'native-base';

type LoadingProps = {
  isVisible: boolean;
};

export const Loading = ({ isVisible }: LoadingProps) => {
  return (
    <Modal isOpen={isVisible}>
      <Spinner size="lg" colorScheme={'brand'} />
    </Modal>
  );
};
