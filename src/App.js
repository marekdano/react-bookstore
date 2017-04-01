import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Books} from './Components/Books';
import {BookDetail} from './Components/Bookdetail';
import {Dashboard} from './Components/Dashboard';
import NotFoundPage from './Components/NotFoundPage';
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

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/books" component={Books} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/detail/:id" component={BookDetail} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
