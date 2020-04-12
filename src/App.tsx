import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ExampleUseUser} from './user/ExampleUseUser';
import {ExampleUserStore} from './user/ExampleUserStore';
import { Login } from './user/Login';
import { setUndefinedUser } from './user/userStore';
import { ExampleExtraInfoWhenLoggedIn } from './user/ExampleExtraInfoWhenLoggedIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ExampleExtraInfoWhenLoggedIn></ExampleExtraInfoWhenLoggedIn>
        <Login>
          <ExampleUseUser id="1"></ExampleUseUser>
          <ExampleUseUser id="2"></ExampleUseUser>
          <ExampleUserStore></ExampleUserStore>
          <button onClick={setUndefinedUser}>Log Out</button>
        </Login>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
