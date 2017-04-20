import React from 'react';
import { withRouter } from 'react-router';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logOut().then(() => this.props.router.push('/'));
  }

  render(){
    return (
      <div className="header">
        <div className="name-logo">
          <h1>Lilypad</h1>
          <p>keep hopping</p>
        </div>

        <button className="redirect-button"
          onClick={ this.handleLogout }>Sign Out</button>
      </div>
    );
  }
}

export default withRouter(HomeHeader);
