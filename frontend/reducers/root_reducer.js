import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListReducer from './list_reducer';

export default combineReducers({
  session: SessionReducer,
  lists: ListReducer
});
