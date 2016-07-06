import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import appHistory from '../../../utils/app-history'

const style = {
  margin: 12
};

class Welcome extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="limiter">
          <RaisedButton
            label="Login if you have account"
            primary={true}
            fullWidth={true}
            style={style}
            onClick={() => appHistory.push('/login')} />
          <RaisedButton
            label="Register if you don't have"
            secondary={true}
            fullWidth={true}
            style={style}
            onClick={() => appHistory.push('/register')} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Welcome;
