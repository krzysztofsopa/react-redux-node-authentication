import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NotificationActions from '../../notification/actions/notification-actions'

class MySnackbar extends React.Component {
  render () {
    const { notification } = this.props;

    return (
      <MuiThemeProvider>
        <Snackbar
          open={notification.isOpen}
          message={notification.message}
          autoHideDuration={3000}
        />
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MySnackbar);
