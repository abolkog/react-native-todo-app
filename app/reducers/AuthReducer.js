
const INITIAL_STATE = { user: null, loading: false, error: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'login_attempt':
      return {...state, loading: true }
    default:
      return state;
  }
}
