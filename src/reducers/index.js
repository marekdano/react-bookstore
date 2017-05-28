
import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import AuthReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  books: BooksReducer,
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;