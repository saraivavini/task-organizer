import React from 'react';

export function withHook<TComponentProps, TScreenProps>(
  Component: React.FunctionComponent<
    TComponentProps & { children?: React.ReactNode }
  >,
  hook: (prop: TScreenProps) => TComponentProps & { children?: React.ReactNode }
) {
  return (prop: TScreenProps) => React.createElement(Component, hook(prop));
}
