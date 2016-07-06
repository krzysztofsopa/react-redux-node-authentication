import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/login-actions'
import Login from './login'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onLogin() {
    this.props.actions.login(
      this.state.username,
      this.state.password
    )
  }

  render() {
    return (
      <Login
        username={this.state.username}
        password={this.state.password}
        onChangeUsername={this.onChangeUsername.bind(this)}
        onChangePassword={this.onChangePassword.bind(this)}
        onLogin={this.onLogin.bind(this)}
      />
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginContainer);
