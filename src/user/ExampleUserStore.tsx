import React from 'react'
import {observer} from 'mobx-react';
import {user} from './userStore';

export const ExampleUserStore = observer(() => {
  return (
    <div>
      {user.id} {user.name}
    </div>
  )
});
