import Immutable from 'immutable'

const initialState = new Immutable.Map({
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGGED_SUCCESSFULLY':
      return state.merge({
        isLoggedIn: true,
        token: action.token,
        userId: action.userId
      });
      break;
    default:
      return state;
  }
}

export default loginReducer;
