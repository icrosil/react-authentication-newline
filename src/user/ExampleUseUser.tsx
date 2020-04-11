import React from 'react'
import { useUser } from './useUser'

type Props = {
  id: string;
}

export function ExampleUseUser({id}: Props) {
  const [user] = useUser(id);
  if (!user) return <div>no user</div>;
  return (
    <div>
      {user.id} {user.first_name}
    </div>
  )
}

