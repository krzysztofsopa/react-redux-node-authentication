import request from 'superagent'
import _ from 'lodash'
import * as Config from '../../../utils/config'
import * as NotificationActions from '../../notification/actions/notification-actions'
import appHistory from '../../../utils/app-history'

export function register(username, password, email) {
  return (dispatch) => {
    request
      .post(Config.API_DOMAIN + 'api/register')
      .send({
        name: username,
        password: password,
        email: email
      })
      .end((error, response) => {
        if (_.isUndefined(response)) {
          return dispatch(registerFailure('Error: No response'));
        }

        if (error) {
          return dispatch(registerFailure(error));
        }

        if (response.body.success) {
          NotificationActions.show(response.body.message)(dispatch);
          appHistory.push('/login');
        }

        if (!response.body.success) {
          NotificationActions.show(response.body.message)(dispatch);
        }
      });
  }
}

export function registerSuccess(data) {
  return {type: 'REGISTER_SUCCESSFULLY', data};
}

export function registerFailure(error) {
  return {type: 'REGISTER_FAILURE', error};
}
