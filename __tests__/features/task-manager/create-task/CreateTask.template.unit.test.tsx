import { CreateTaskTemplate } from '../../../../src/features/task-manager/create-task/CreateTask.template';

import { componentBuilder } from '../../../utils/componentBuilder';

const { renderComponent } = componentBuilder(CreateTaskTemplate, {
  feedback: undefined,
  isLoading: false,
  onChangeDate: jest.fn(),
  onChangeTime: jest.fn(),
  onChangeTitle: jest.fn(),
  onGoBack: jest.fn(),
  onSubmit: jest.fn(),
  task: {
    title: 'task-title',
  },
});

describe('SignUp template tests', () => {
  it('Should renders correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    expect(getByTestId('create-task-template-title')).toBeDefined();
    expect(getByTestId('create-task-template-subtitle')).toBeDefined();
    expect(getByTestId('create-task-template-button')).toBeDefined();
  });
});
