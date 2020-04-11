import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export function useMobXStore() {
  return useContext(MobXProviderContext);
}
