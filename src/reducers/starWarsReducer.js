import{ /* we need our action types here*/ 
  FETCH_,
  SUCCESS_,
  FAILURE_,
}from "../actions/index";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_: return {
      ...state,
      fetching : true,
      error : '',
    }
    case SUCCESS_: return {
      ...state,
      fetching: false,
      error: '',
      characters: action.payload.results
    }

    default:
      return state;
  }
};
