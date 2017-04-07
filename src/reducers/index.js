
import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  books: BooksReducer,
  form: formReducer
  //state: (state = {}) => state
});

export default rootReducer;