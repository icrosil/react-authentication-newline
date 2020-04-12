import React from 'react'
import { isLoggedIn } from './userStore'
import { observer } from 'mobx-react';
import { useUser } from './useUser';

export const ExampleExtraInfoWhenLoggedIn = observer(() => {
  const [user] = useUser('5');
  if (!user?.data.id) return null;
  const text = `${user?.data?.first_name} ${isLoggedIn ? `is working at ${user?.ad.company}` : ''}`;
  return (
    <div>
      {text}
    </div>
  )
});

