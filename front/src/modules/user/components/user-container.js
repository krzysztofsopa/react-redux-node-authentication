import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user-actions';
import appHistory from '../../../utils/app-history';


import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserFormContainer from './user-form-container';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getUser();
  }

  updateUser() {
    this.props.actions.updateUser(this.props.user);
  }

  onChangeEmail(event) {
    this.props.actions.userDataUpdated({email: event.target.value});
  }

  onChangeSurname(event) {
    this.props.actions.userDataUpdated({surname: event.target.value});
  }

  render() {
    const { user } = this.props;

    return (
      <MuiThemeProvider>
        <UserFormContainer
          user={user}
          actionType={'edit'}
          updateUser={this.updateUser.bind(this)}
          onChangeEmail={this.onChangeEmail.bind(this)}
          onChangeSurname={this.onChangeSurname.bind(this)}
        />
      </MuiThemeProvider>
    )
  }
};

UserContainer.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
