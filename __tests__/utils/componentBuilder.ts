import { render } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { AppProvider } from './AppProvider';

export const componentBuilder = <ComponentProps extends {}>(
  Component: React.FunctionComponent<PropsWithChildren<ComponentProps>>,
  defaultProps: PropsWithChildren<ComponentProps>
) => {
  const renderComponent = (
    newProps?: Partial<PropsWithChildren<ComponentProps>>
  ) => {
    const props = { ...defaultProps, ...newProps };

    const component = render(React.createElement(Component, props), {
      wrapper: AppProvider,
    });

    return { props, component };
  };

  return { renderComponent };
};
