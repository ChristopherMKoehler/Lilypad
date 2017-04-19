import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logOut();
  }

  render() {
    if(this.props.currentUser){
      return (
        <div>
          <h1 className="welcome">Welcome {this.props.currentUser.username}!</h1>
          <button onClick={ this.handleLogOut }>Log Out!</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="welcome">Welcome to Lilypad!</h1>
          <Link to='/signup'>Sign Up!</Link>
          <Link to='/login'>Log In!</Link>
        </div>
      );
    }
  }
}

export default Greeting;
