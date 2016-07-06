import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import appHistory from '../../../utils/app-history'
import Register from './register'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../actions/register-actions'

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
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

  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onRegister() {
    this.props.actions.register(
      this.state.username,
      this.state.password,
      this.state.email
    )
  }

  render() {
    return (
      <Register
        {...this.state}
        onChangeUsername={this.onChangeUsername.bind(this)}
        onChangePassword={this.onChangePassword.bind(this)}
        onChangeEmail={this.onChangeEmail.bind(this)}
        onRegister={this.onRegister.bind(this)}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RegisterActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RegisterContainer);
