import { ScreenContainer } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(ScreenContainer, {});

describe('ScreenContainer tests', () => {
  it('Should renders correctly', () => {
    const { component } = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render loading modal when pass "isLoading" prop', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      isLoading: true,
    });

    expect(getByTestId('loading-modal')).toBeDefined();
  });

  it('Should render feedback alert when pass "feedback" prop', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      feedback: {
        type: 'error',
        message: 'error message',
      },
    });

    expect(getByTestId('feedback-alert')).toBeDefined();
  });
});
