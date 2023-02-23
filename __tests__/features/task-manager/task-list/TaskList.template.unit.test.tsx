import { TaskListTemplate } from '../../../../src/features/task-manager/task-list/TaskList.template';

import { componentBuilder } from '../../../utils/componentBuilder';
import { mockedTask } from '../../../__mocks__/requests';

const { renderComponent } = componentBuilder(TaskListTemplate, {
  feedback: undefined,
  isLoading: false,
  onCompleteTask: jest.fn(),
  onDeleteTask: jest.fn(),
  onMainButtonPress: jest.fn(),
  onSignOut: jest.fn(),
  tasks: [mockedTask],
});

describe('TaskList template tests', () => {
  it('Should renders correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    expect(getByTestId('task-list-template-title')).toBeDefined();
    expect(getByTestId('task-list-template-subtitle')).toBeDefined();
    expect(getByTestId('task-list-template-button')).toBeDefined();
  });
});
