import { act, fireEvent } from '@testing-library/react-native';
import { TaskCard } from '../../../../../../src/features/task-manager/task-list/components/TaskCard';

import { componentBuilder } from '../../../../../utils/componentBuilder';
import { mockedTask } from '../../../../../__mocks__/requests';

const { renderComponent } = componentBuilder(TaskCard, {
  ...mockedTask,
  onComplete: jest.fn(),
  onDelete: jest.fn(),
});

describe('SignUp template tests', () => {
  it('Should renders correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    expect(getByTestId('task-card-container')).toBeDefined();
    expect(getByTestId('task-card-title')).toBeDefined();
  });

  it('Should render completed task correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ isCompleted: true });

    const checkButton = getByTestId('task-card-complete-check');

    expect(checkButton.props.isChecked).toBeTruthy();
  });

  it('Should execute onComplete prop when press the checkbox', () => {
    const {
      component: { getByTestId },
      props,
    } = renderComponent();

    const checkBox = getByTestId('task-card-complete-check');

    act(() => {
      fireEvent.press(checkBox);
    });

    expect(props.onComplete).toBeCalled();
  });

  it('Should execute onDelete prop when press the delete icon', () => {
    const {
      component: { getByTestId },
      props,
    } = renderComponent();

    const deleteButton = getByTestId('task-card-delete-button');

    act(() => {
      fireEvent.press(deleteButton);
    });

    expect(props.onDelete).toBeCalled();
  });
});
