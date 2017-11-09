import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import TaskListReducer from './TaskListReducer';
import SaveTaskReducer from './SaveTaskReducer';

export default combineReducers({
  auth: AuthReducer,
  taskList: TaskListReducer,
  saveTask: SaveTaskReducer
});
