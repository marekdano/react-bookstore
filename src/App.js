import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Amazon by Hackages</h1>
          <nav>
            <Link to="/dashboard">Books</Link>
            <Link to="/books">Manage Books</Link>
          </nav>

          <Routes />

        </div>
      </Router>
    );
  }
}
