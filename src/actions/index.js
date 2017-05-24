import axios from 'axios';
import { 
  FETCH_BOOKS, 
  FETCH_BOOK, 
  CREATE_BOOK, 
  DELETE_BOOK,
  SELECT_BOOK,
  UPDATE_BOOK,
  LOAD } from './constants';

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

    // if request is good...
    // - update state to indicate user is authenticated
    // - save the JWT token
    // - redirect to the route '/feature'

    // if request is bad...
    // - show an error to the user
  }
}