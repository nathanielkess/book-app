import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './ui/containers/counter.container';
import Auth from './ui/containers/auth.container';
import Users from './ui/containers/users.container';

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Book App</h2>
    </div>
    <div className="mainContent">
      <Counter />
      <br />
      <Auth />
      <br />
      <Users />
    </div>
  </div>;

export default App;
