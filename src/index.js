import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { App } from './main/App';

// Dependencies
import 'font-awesome/css/font-awesome.css'
import './index.css';


const store = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware()    
    )
  );
  
  return store;
};

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>
  , document.getElementById('root')
);