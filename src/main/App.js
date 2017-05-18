import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import routes from '../routes';
import Header from "../Components/Header";

import './App.css';

export const App = () => {
  return (
    <Router>
      
      <div className="container">
        <Header />
        <h1>Amazon by Hackages</h1>
        <nav>
          <Link to="/dashboard">Books</Link>
          <Link to="/books">Manage Books</Link>
        </nav>
        <div className="container">
          {routes}          
        </div>  
      </div>
    </Router>
  );
}
