import request from 'superagent'
import _ from 'lodash'
import appHistory from '../../../utils/app-history'
import * as Config from '../../../utils/config'
import * as NotificationActions from '../../notification/actions/notification-actions'

export function login(username, password) {
  return (dispatch) => {
    NotificationActions.show('Loging in. Please wait.')(dispatch);

    request
      .post(Config.API_DOMAIN + 'api/authenticate')
      .send({
        name: username,
        password: password
      })
      .end((error, response) => {
        if (_.isUndefined(response)) {
          return dispatch(loginFailure('Error: No response'));
        }

        if (error) {
          return dispatch(loginFailure(error));
        }

        var token = response.body.token;
        var userId = response.body.userId;

        if (token && userId) {
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);

          dispatch(loginSuccess({userId: userId, token: token}));
          appHistory.push('/user');
        } else {
          NotificationActions.show('Wrong username or password')(dispatch);
          localStorage.removeItem('token');
        }
      });
  }
}

export function loginSuccess(data) {
  return {type: 'LOGGED_SUCCESSFULLY', data};
}

export function loginFailure(error) {
  return {type: 'LOGGED_FAILURE', error};
}
