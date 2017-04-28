import React from 'react';
import { Link } from 'react-router';
import Splash from '../splash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuestLogIn = this.handleGuestLogIn.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname != this.props.location.pathname){
      newProps.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.router.push('/home/lists/all_tasks'));
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleGuestLogIn(e) {
    e.preventDefault();
    this.props.processForm({ username: "Guest", password: "password" })
      .then(() => this.props.router.push('/home/lists/all_tasks'));
  }

  render() {
    let emailFormInput = "";
    let formHeader = "Log In to Lilypad!";
    let alternatePath = "/signup";


    let emailClass = "text";
    let usernameClass = "text";
    let passwordClass = "text";

    let emailErrors = "";
    let usernameErrors = "";
    let passwordErrors = "";

    if(this.props.errors){
      if(this.props.errors.email) {
        emailErrors = <span>{`Email ${this.props.errors.email}`}</span>;
        emailClass = "text-error";
      }

      if(this.props.errors.username) {
        usernameErrors = <span>{`Username ${this.props.errors.username}`}</span>;
        usernameClass = "text-error";
      }


      if(this.props.errors.password) {
        passwordErrors = <span>{`Password ${this.props.errors.password}`}</span>;
        passwordClass = "text-error";
      }
    }

    let guestSignInButton = "";
    if (this.props.formType === "signup") {
      emailFormInput =
      <div>
        <input type="text"
          className={ emailClass }
          value={ this.state.email }
          onChange={ this.update("email") }
          placeholder="Email"/>
      </div>;
      formHeader = "Sign Up for Lilypad!";
      alternatePath = "/login";
    } else {
      guestSignInButton = <button onClick={ this.handleGuestLogIn } className="submit">Guest Login</button>;
    }

    let base;
    if(this.props.errors){
      base = this.props.errors.base;
    }

    return (
      <Splash>
        <div className="frontpage-content">
          <div className="description">
            <div className="description-content">
              <div className="motivational-frog-quote">
                <h1>Don't be a fish; be a frog. Swim in the water and jump when you hit ground.</h1>
                <p id="kim">-Kim Young-ha</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <h1>{ formHeader }</h1>

            <span>{ base }</span>
            <form onSubmit={ this.handleSubmit } className="auth-form">
              { emailFormInput }
              { emailErrors }

              <input className={ usernameClass }
                type="text"
                value={ this.state.username }
                onChange={ this.update("username") }
                placeholder="Username"/>
              { usernameErrors }

              <input className={ passwordClass }
                type="password"
                value={ this.state.password }
                onChange={ this.update("password") }
                placeholder="Password"/>
              { passwordErrors }


              <input className="submit" type="submit"></input>
              { guestSignInButton }
            </form>
          </div>
        </div>
    </Splash>
    );
  }
}
// <Link className="alt-link" to={ alternatePath }>{ this.props.formType === "signup" ? "Log In to Lilypad!" : "Sign Up for Lilypad!" }</Link>

export default SessionForm;
