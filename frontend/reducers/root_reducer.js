import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListReducer from './list_reducer';
import TaskReducer from './task_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  session: SessionReducer,
  lists: ListReducer,
  tasks: TaskReducer,
  searchParams: SearchReducer
});
