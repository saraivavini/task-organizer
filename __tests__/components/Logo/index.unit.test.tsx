import { Logo } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(Logo, {
  size: 'medium',
});

describe('Logo tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
