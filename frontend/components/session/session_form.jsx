import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname != this.props.location.pathname){
      newProps.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.router.push('/'));
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    let emailFormInput = "";
    let formHeader = "Log In!";
    let alternatePath = "/signup";
    if (this.props.formType === "signup") {
      emailFormInput =
          <input type="text" value={ this.state.email }
            onChange={ this.update("email") }
            placeholder="Email"/>;
      formHeader = "Sign Up!";
      alternatePath = "/login";
    }
    return (
      <div className="auth-form">
        <h1>{ formHeader }</h1>

        { this.props.errors.base }
        <form onSubmit={ this.handleSubmit }>
          {emailFormInput}

          <input type="text"
            value={ this.state.username }
            onChange={ this.update("username") }
            placeholder="Username"/>


          <input type="password"
            value={ this.state.password }
            onChange={ this.update("password") }
            placeholder="Password"/>


          <input type="submit"></input>
          <Link to={ alternatePath }>{ this.props.formType === "signup" ? "Log In!" : "Sign Up!" }</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;
