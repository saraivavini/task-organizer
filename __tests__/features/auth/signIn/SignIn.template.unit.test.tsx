import { SignInTemplate } from '../../../../src/features/auth/signIn/SignIn.template';

import { componentBuilder } from '../../../utils/componentBuilder';

const { renderComponent } = componentBuilder(SignInTemplate, {
  isLoading: false,
  feedback: undefined,
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
  secondaryButton: {
    label: 'secondary-button-label',
    onPress: jest.fn(),
  },
});

describe('SignIn template tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
