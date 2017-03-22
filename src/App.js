import React, { Component } from 'react';
import logo from './logo.svg';
import UrlBar from './url_bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to URL Shortener</h2>
        </div>
        <UrlBar/>
      </div>
    );
  }
}

export default App;
