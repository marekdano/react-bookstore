
import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import { reducer as formReducer } from 'redux-form';
//import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  books: BooksReducer,
  form: formReducer,
  //router: routerReducer
  //state: (state = {}) => state
});

export default rootReducer;