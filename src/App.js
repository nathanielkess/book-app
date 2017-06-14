import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './ui/containers/auth.container';
import Users from './ui/containers/users.container';
import Books from './ui/containers/books.container';
import Search from './ui/containers/book-search.container';
import MyBooks from './ui/containers/my-books.container';
import ChatBox from './ui/components/chat-box';

const App = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Book App</h2>
      <Search />
    </div>
    <div className="mainContent">
      <Auth />
      <br />
      <hr />
      <Users />
      <hr />
      <Books />
      <hr />
      <p>Books that I read</p>
      <MyBooks />
      <hr />
      <ChatBox />
      <hr />

    </div>
  </div>;

export default App;
