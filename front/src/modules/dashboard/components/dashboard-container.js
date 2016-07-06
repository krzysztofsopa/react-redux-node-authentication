import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LeftMenu from './left-menu'
import appHistory from '../../../utils/app-history'
import { connect } from 'react-redux';
import * as NotificationActions from '../../notification/actions/notification-actions'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  onLogout() {
    localStorage.removeItem('token');
    NotificationActions.show('Logged out!')(this.props.dispatch);
    appHistory.push('/');
  }

  render() {
    let self = this;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Your App"
            iconElementRight={
              <FlatButton
                label="Logout"
                secondary={true}
                onClick={self.onLogout.bind(self)}
              />
            }
            onLeftIconButtonTouchTap={self.handleToggle.bind(self)}
          />
          <div className="limiter">
            {this.props.children}
          </div>
          <LeftMenu
            open={this.state.open}
            handleToggle={self.handleToggle.bind(self)}
          />
        </div>
      </MuiThemeProvider>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotificationActions, dispatch)
  };
}

export default connect()(DashboardContainer);
