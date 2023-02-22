import { Loading } from '../../../src/components';
import { componentBuilder } from '../../utils/componentBuilder';

const { renderComponent } = componentBuilder(Loading, {
  isVisible: false,
});

describe('Loading tests', () => {
  it('Should show the spinner when prop isVisible is true', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      isVisible: true,
    });

    expect(getByTestId('loading-modal-spinner')).toBeDefined();
  });

  it('Should not show the spinner when prop isVisible is false', () => {
    const {
      component: { queryByTestId },
    } = renderComponent({
      isVisible: false,
    });

    expect(queryByTestId('loading-modal-spinner')).toBeNull();
  });
});
