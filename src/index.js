import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { AUTH_USER } from './actions/constants';

import { App } from './main/App';

// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';


const store = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware    
    )
  );
  
  const token = localStorage.getItem('token');
  // if we have a token, consider the user to be signed in
  if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER }); 
  }

  return store;
};


ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>
  , document.getElementById('root')
);