import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST, RECEIVE_ERRORS } from '../actions/list_actions';
import merge from 'lodash/merge';

const _defaultLists = Object.freeze({

});

const listReducer = (state = { errors: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    case REMOVE_LIST:
      const newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default listReducer;
