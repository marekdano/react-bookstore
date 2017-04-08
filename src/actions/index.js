import axios from 'axios';
import { FETCH_BOOKS, FETCH_BOOK, CREATE_BOOK, DELETE_BOOK } from './constants';

const ROOT_URL = 'http://localhost:5000';

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/books`);
	console.log("Request: ", request);

  return {
    type: FETCH_BOOKS,
    payload: request
      // new Promise(resolve => {
      //   setTimeout(() => request.then(response => {
      //     console.log("Response: ", response);
      //     resolve(response.data);
      //   }), 1000);
      // })
  };
}

export function createBook(props) {
  const request = axios.post(`${ROOT_URL}/books`, props);

  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function fetchBook(id) {
  const request = axios.get(`${ROOT_URL}/books/${id}`);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}

export function deleteBook(id) {
  const request = axios.delete(`${ROOT_URL}/books/${id}`);

  return {
    type: DELETE_BOOK,
    payload: request
  };
}