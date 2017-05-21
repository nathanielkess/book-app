import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './ui/containers/auth.container';
import Users from './ui/containers/users.container';
import Books from './ui/containers/books.container';
import SearchBox from './ui/containers/book-search.container';

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Book App</h2>
      <SearchBox />
    </div>
    <div className="mainContent">
      <Auth />
      <br />
      <Users />
      <br />
      <Books />
    </div>
  </div>;

export default App;
