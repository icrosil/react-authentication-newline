import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { logUserIn, isLoggedIn } from './userStore';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const Login = observer(({ children }: Props) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  if (isLoggedIn) {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        logUserIn(login);
      }}>
        <input type="text" placeholder="login" value={login} onChange={(event) => setLogin(event.target.value)} />
        <br/>
        <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br/>
        <button type="submit">log in</button>
      </form>
    )
  }
  return <>{children}</>;
})

