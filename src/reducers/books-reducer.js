
import { 
	FETCH_BOOKS, 
	FETCH_BOOK,
	DELETE_BOOK,
	SELECT_BOOK, 
	CREATE_BOOK,
	UPDATE_BOOK,
	LOAD } from '../actions/constants';

const INITIAL_STATE = { 
	all: [], 
	book: null, 
	selectedBookId: null,
	isFetching: false,
  error: false 
};
/**
 * Reducers implement as it was recommended in this repo
 * https://github.com/react-native-training/redux-4-ways/blob/promise-middleware/reducers/dataReducer.js
 */
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
		case `${FETCH_BOOKS}_PENDING`:
      return {
        ...state,
        all: [],
				book: null,
        isFetching: true
      }
		case `${FETCH_BOOKS}_FULFILLED`:
			return { 
				...state, 
				all: action.payload.data,
				book: null,
				isFetching: false 
			}
		case `${FETCH_BOOKS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        error: true
      }

		case `${FETCH_BOOK}_FULFILLED`:
			return { 
				...state, 
				book: action.payload.data
			};

		case `${DELETE_BOOK}_FULFILLED`:
			return {
			 	...state,
				all: state.all.filter(book => book.id !== state.selectedBookId),
				selectedBookId: null,
				book: null
			};

		case `${SELECT_BOOK}_FULFILLED`:
			return {
				...state,
				selectedBookId: action.payload 
			}
		
		case `${CREATE_BOOK}_FULFILLED`:
			return {
				...state,
				all: [...state.all, action.payload.data]
			}

		case `${UPDATE_BOOK}_FULFILLED`:
			return {
				...state,
				book: action.payload.data
			}
	
		case LOAD:
			return {
				...state,
				book: action.data
			}
	
		default:
			return state;
		}
}