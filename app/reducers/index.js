import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import TaskListReducer from './TaskListReducer';

export default combineReducers({
  auth: AuthReducer,
  taskList: TaskListReducer
});
