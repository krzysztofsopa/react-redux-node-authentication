import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import appHistory from '../../../utils/app-history'

class LeftMenu extends React.Component {

  goToPayment() {
    appHistory.push('/payment');
  }

  goToUser() {
    appHistory.push('/user');
  }

  render() {
    return (
      <MuiThemeProvider>
        <Drawer docked={false} width={300} openSecondary={false} open={this.props.open} >
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.props.handleToggle}
          />
          <List>
            <Subheader>Menu description</Subheader>
            <ListItem primaryText="User" leftIcon={<ContentSend />} onClick={this.goToUser}/>
            <ListItem primaryText="Payment" leftIcon={<ContentDrafts />} onClick={this.goToPayment}/>
          </List>
        </Drawer>
      </MuiThemeProvider>
    )
  }
};

export default LeftMenu;
