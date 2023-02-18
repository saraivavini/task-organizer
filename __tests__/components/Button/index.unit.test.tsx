import { Button } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(Button, {
  label: '',
  onPress: jest.fn(),
});

describe('Button tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
