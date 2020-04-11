import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { userStore, logUserIn } from './userStore';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const Login = observer(({ children }: Props) => {
  const [login, setLogin] = useState<string>('');
  if (userStore.id === null && userStore.isLoaded) {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        logUserIn(login);
      }}>
        <input type="text" placeholder="login" value={login} onChange={(event) => setLogin(event.target.value)} />
      </form>
    )
  }
  return <>{children}</>;
})

