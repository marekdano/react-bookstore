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
  const request = axios.get(`${ROOT_URL}/books`);
  
  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createBook(props) {
  const request = axios.post(`${ROOT_URL}/books`, props);

  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function fetchBook(bookId) {
  const request = axios.get(`${ROOT_URL}/books/${bookId}`);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}

export function deleteBook(bookId) {
  const request = axios.delete(`${ROOT_URL}/books/${bookId}`);
  
  return {
    type: DELETE_BOOK,
    payload: request
  };
}

export function updateBook(bookId, props) {
  const request = axios.put(`${ROOT_URL}/books/${bookId}`, props);
  
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