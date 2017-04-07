
import { FETCH_BOOKS, FETCH_BOOK } from '../actions/types';

const INITIAL_STATE = { all: [], book: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
		case FETCH_BOOK:
			return { ...state, book: action.payload.data };
		case FETCH_BOOKS:
			return { ...state, all: action.payload.data };
		default:
			return state;
		}
}