import React from 'react';
import { Provider, ProviderProps } from 'mobx-react';

type Props = {
  children?: ProviderProps['children'],
  stores: any,
};

export const StoreMobXProvider = ({ children, stores }: Props) => <Provider {...stores}>{children}</Provider>;
