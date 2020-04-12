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
      {user.data.id} {user.data.first_name}
      <br/>
      {user.ad.company}
    </div>
  )
}

