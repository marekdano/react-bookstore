import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import createHistory from 'history/createBrowserHistory';
//import { routerMiddleware } from 'react-router-redux';

import { App } from './App';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// Dependencies
import 'font-awesome/css/font-awesome.css'
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
//export const history = createHistory();

const store = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      // Build the middleware for intercepting and dispatching navigation actions
      //routerMiddleware(history),
      thunkMiddleware,
      promiseMiddleware()    
    )
  );
  console.log("Store: ", store);
  return store;
};

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>
  , document.getElementById('root')
);