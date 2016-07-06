import _ from 'lodash';

export default function requireAuth(nextState, replace) {
  var token = localStorage.getItem('token');
  if (_.isNull(token)) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
