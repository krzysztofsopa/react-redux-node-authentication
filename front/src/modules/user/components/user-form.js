import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserForm extends React.Component {
  render() {
    const {user, placeholders, labels, saveUser} = this.props;

    return (
      <div>
        <TextField
          hintText="email@email.pl"
          floatingLabelText="Set email"
          value={user.email}
          onChange={this.props.onChangeEmail}
        />
        <TextField
          hintText="surname"
          floatingLabelText="Set surname"
          value={user.surname}
          onChange={this.props.onChangeSurname}
        />
        <div className="button-holder">
          <RaisedButton
            secondary={true}
            label={labels.button}
            onClick={() => this.props.updateUser()}
          />
        </div>
      </div>
    )
  }
};

export default UserForm;
