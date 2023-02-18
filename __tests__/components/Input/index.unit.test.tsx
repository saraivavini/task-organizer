import { Input } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(Input, {
  onChange: jest.fn(),
  value: '',
  placeholder: '',
  type: 'text',
});

describe('Input tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
