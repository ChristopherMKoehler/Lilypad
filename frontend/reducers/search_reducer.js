import { RECIEVE_SEARCH_PARAMS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = { searchParams: "" }, action) => {
  switch(action.type) {
    case RECIEVE_SEARCH_PARAMS:
      return merge({}, state, action.searchParams);
    default:
      return state;
  }
};

export default SearchReducer;
