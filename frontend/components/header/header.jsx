import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleReroute = this.handleReroute.bind(this);
  }

  handleReroute(altRoute){
    return e => this.props.router.push(altRoute);
  }

  render() {
      let buttonValue = this.props.location.pathname.slice(1);
      let altRoute;
      if(buttonValue === "" || buttonValue === "login"){
        buttonValue = "Sign up for free!";
        altRoute = "/signup";
      } else {
        buttonValue = "Sign in!";
        altRoute = "/login";
      }

    return (
      <div className="header">
        <div className="name-logo">
          <h1>Lilypad</h1>
          <p>keep hopping</p>
        </div>
        <button className="redirect-button"
          onClick={ this.handleReroute(altRoute) }>{ buttonValue }</button>
      </div>
    );
  }
}

export default withRouter(Header);
