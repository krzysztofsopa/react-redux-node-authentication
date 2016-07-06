import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends React.Component {
  render() {
    const { onChangeUsername, onChangePassword, onLogin } = this.props;
    const { username, password } = this.props;

    return (
      <MuiThemeProvider>
        <div className="limiter">
          <TextField
            name={'username'}
            value={username}
            onChange={onChangeUsername}
            floatingLabelText="Username"
          />
          <TextField
            name={'password'}
            value={password}
            onChange={onChangePassword}
            floatingLabelText="Password"
            type="password"
          />
          <div className="button-holder">
            <RaisedButton
              label="Login"
              primary={true}
              fullWidth={true}
              onClick={onLogin}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default Login;
