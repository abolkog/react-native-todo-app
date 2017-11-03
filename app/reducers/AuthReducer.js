import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = { user: null, loading: false, error: '', }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_ATTEMPT:
      return {...INITIAL_STATE, loading: true }
    case LOGIN_FAILED:
      return {...INITIAL_STATE, loading: false, error: action.error  }
    case LOGIN_SUCCESS:
      return {...INITIAL_STATE, loading: false, user: action.user  }
    default:
      return state;
  }
}
