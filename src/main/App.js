import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import routes from '../routes';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    console.log("Props: ", this.props);
  }
  render() {
    console.log("App props: ", this.props);
    return (
      <Router>
        <div className="container">
          <h1>Amazon by Hackages</h1>
          <nav>
            <Link to="/dashboard">Books</Link>
            <Link to="/books">Manage Books</Link>
          </nav>
          <div>
            {routes}          
          </div>  
        </div>
      </Router>
    );
  }
}
