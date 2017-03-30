import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './containers/counter/counter.container';
import Auth from './containers/auth/auth.container';

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="mainContent">
      <Counter />
      <br />
      <Auth />
    </div>
  </div>;

export default App;
