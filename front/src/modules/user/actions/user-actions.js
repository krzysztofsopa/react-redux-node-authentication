
import request from 'superagent';
import _ from 'lodash';
import * as Config from '../../../utils/config';
import * as NotificationActions from '../../notification/actions/notification-actions'

export function getUser() {
  return (dispatch) => {
      request
        .get(Config.API_DOMAIN + 'api/users/' + localStorage.getItem('userId'))
        .set('x-access-token', localStorage.getItem('token'))
        .end((error, response) => {
          dispatch(userGet(response.body));
        });
  }
}

export function updateUser(user) {
  return (dispatch) => {
      request
        .post(Config.API_DOMAIN + 'api/users/' + localStorage.getItem('userId'))
        .set('x-access-token', localStorage.getItem('token'))
        .send({
          name: user.name,
          email: user.email,
          surname: user.surname
        })
        .end((error, response) => {
          dispatch(userUpdated(response.body));
          return NotificationActions.show('User updated successfully')(dispatch);
        });
  }
}

export function userDataUpdated(user) {
  return (dispatch) => {
    dispatch({
      type: 'USER_DATA_UPDATED',
      user: user
    });
  }
}

export function userUpdated(data) {
  return {type: 'USER_UPDATED', data};
}

export function userGet(user) {
  return {type: 'USER_GET', user: user};
}
