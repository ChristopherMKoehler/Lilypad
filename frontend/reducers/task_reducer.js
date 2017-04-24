import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK, RECEIVE_ERRORS } from '../actions/task_actions';
import merge from 'lodash/merge';


const taskReducer = (state = { errors: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      return merge({}, state, { [action.task.id]: action.task });
    case REMOVE_TASK:
      const newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default taskReducer;
