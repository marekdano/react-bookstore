
import { 
	FETCH_BOOKS, 
	FETCH_BOOK,
	DELETE_BOOK,
	SELECT_BOOK } from '../actions/constants';

const INITIAL_STATE = { all: [], book: null, selectedBookId: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
		case `${FETCH_BOOKS}_FULFILLED`:
			return { 
				...state, 
				all: action.payload.data 
			};
		case `${FETCH_BOOK}_FULFILLED`:
			return { 
				...state, 
				book: action.payload.data
			};

		case `${DELETE_BOOK}_FULFILLED`:
			return {
			 	...state,
				all: state.all.filter(book => book.id !== state.selectedBookId)
			};

		case `${SELECT_BOOK}_FULFILLED`:
			return {
				...state,
				selectedBookId: action.payload 
			}

		default:
			return state;
		}
}