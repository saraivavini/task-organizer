import { Modal, Spinner } from 'native-base';

type LoadingProps = {
  isVisible: boolean;
};

export const Loading = ({ isVisible }: LoadingProps) => {
  return isVisible ? (
    <Modal testID="loading-modal" isOpen={isVisible}>
      <Spinner testID="loading-modal-spinner" size="lg" colorScheme={'brand'} />
    </Modal>
  ) : null;
};
