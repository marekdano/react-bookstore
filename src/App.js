import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Books} from './Components/Books';
import {BookDetail} from './Components/Bookdetail';
import './App.css';
import {Dashboard} from './Components/Dashboard';

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

          <Route exact path="/" component={Dashboard} />
          <Route path="/books" component={Books} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail/:id" component={BookDetail} />
        </div>
      </Router>
    );
  }
}
