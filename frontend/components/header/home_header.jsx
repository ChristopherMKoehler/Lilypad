import React from 'react';
import SearchBarContainer from '../search/search_bar_container';

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
    let username = "";

    if(this.props.currentUser) {
      username = this.props.currentUser.username;
    }

    return (
      <div className="header">
        <div className="name-logo">
          <h1>Lilypad</h1>
          <p>keep hopping</p>
        </div>

        <div className="welcome-logout">
          <SearchBarContainer />
          <h1>{ `Welcome ${ username }!` }</h1>
          <button className="redirect-button"
            onClick={ this.handleLogout }>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeHeader);
