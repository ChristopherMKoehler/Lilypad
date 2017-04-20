import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentUser) {
      return (
        <div>
          <h1 className="welcome">Welcome {this.props.currentUser.username}!</h1>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
