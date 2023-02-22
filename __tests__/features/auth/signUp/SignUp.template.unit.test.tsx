import { SignUpTemplate } from '../../../../src/features/auth/signUp/SignUp.template';

import { componentBuilder } from '../../../utils/componentBuilder';

const { renderComponent } = componentBuilder(SignUpTemplate, {
  isLoading: false,
  feedback: undefined,
  onGoBack: jest.fn(),
  username: {
    value: '',
    onChange: jest.fn(),
  },
  password: {
    value: '',
    onChange: jest.fn(),
  },
  button: {
    label: 'button-label',
    onPress: jest.fn(),
  },
});

describe('SignUp template tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
