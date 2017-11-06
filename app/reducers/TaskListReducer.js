import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', tasks: [] }

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOADING_TASKS:
      return { ...INITIAL_STATE, loading: true }
    case LOADING_SUCCESS:
      return { ...INITIAL_STATE, loading: false, tasks: action.tasks}
    case LOADING_FAILED:
      return { ...INITIAL_STATE, loading: false, error: action.error }
    default:
      return state;
  }
}
