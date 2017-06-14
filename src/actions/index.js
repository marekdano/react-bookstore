import axios from 'axios';
import { 
  FETCH_BOOKS, 
  FETCH_BOOK, 
  CREATE_BOOK, 
  DELETE_BOOK,
  SELECT_BOOK,
  UPDATE_BOOK,
  LOAD,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR 
} from './constants';

const ROOT_URL = 'http://localhost:5000';

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/api/books`);
  
  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createBook(props) {
  const request = axios.post(`${ROOT_URL}/api/books`, props);

  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function fetchBook(bookId) {
  const request = axios.get(`${ROOT_URL}/api/books/${bookId}`);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}

export function deleteBook(bookId) {
  const request = axios.delete(`${ROOT_URL}/api/books/${bookId}`);
  
  return {
    type: DELETE_BOOK,
    payload: request
  };
}

export function updateBook(bookId, props) {
  const request = axios.put(`${ROOT_URL}/api/books/${bookId}`, props);
  
  return {
    type: UPDATE_BOOK,
    payload: request
  };
}

export function selectBook(id) {
  return {
    type: SELECT_BOOK,
    payload: new Promise((resolve) => {
      return resolve(id);
    })
  }
}

/**
 * Simulates data loaded into LOAD reducer from somewhere
 */
export const load = data => ({ type: LOAD, data })



export function loginUser({ email, password }) {
  return function(dispatch) {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/login`, { email, password })
      .then(response => {
        // if request is good...
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'

      })
      .catch(() => {
        // if request is bad...
        // - show an error to the user
        dispatch(authError('Bad Login Info.'));
      });   
  }
}

export function registerUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/register`, { email, password })
     .then(response => {
       console.log("response", response.data);
       dispatch({ type: AUTH_USER });
       localStorage.setItem('token', response.data.token);
       // - redirect to the route '/feature'

     })
     .catch(error => dispatch(authError(error.response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function logoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    // token has to be included in the request for user authentication 
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        console.log("Response in fetchMessage", response);
      });
  }
}
