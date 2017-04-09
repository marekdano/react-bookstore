
import { 
	FETCH_BOOKS, 
	FETCH_BOOK,
	DELETE_BOOK } from '../actions/constants';

const INITIAL_STATE = { all: [], book: null, bookId: null };

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

		//case `${DELETE_BOOK}_PENDING`:
		// 	console.log("DELETE book Pending STATE: ", state);

		case `${DELETE_BOOK}_FULFILLED`:
			// console.log("DELETE book (action.payload): ", action.payload);
			// console.log("DELETE book STATE: ", state);
			return {
			 	...state,
				all: state.all.filter(book => book !== action.payload) // doesn't work yet
			};

		default:
			return state;
		}
}