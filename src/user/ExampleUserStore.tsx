import React from 'react'
import {observer} from 'mobx-react';
import {userStore} from './userStore';

export const ExampleUserStore = observer(() => {
  return (
    <div>
      {userStore.id} {userStore.name}
    </div>
  )
});
