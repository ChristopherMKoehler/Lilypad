import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLogOut = this.handleLogOut.bind(this);
  }

  // handleLogOut(e) {
  //   e.preventDefault();
  //   this.props.logOut().then(() => this.props.router.push("/"));
  // }
  // <button onClick={ this.handleLogOut }>Log Out!</button>

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

// <h1 className="welcome">Welcome to Lilypad!</h1>
export default withRouter(Greeting);
