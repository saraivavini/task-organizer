import { SignInTemplate } from '../../../../src/features/auth/signIn/SignIn.template';

import { componentBuilder } from '../../../utils/componentBuilder';

const { renderComponent } = componentBuilder(SignInTemplate, {
  username: {
    value: '',
    onChange: jest.fn(),
  },
  password: {
    value: '',
    onChange: jest.fn(),
  },
  onSubmit: jest.fn(),
});

describe('SignIn template tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
