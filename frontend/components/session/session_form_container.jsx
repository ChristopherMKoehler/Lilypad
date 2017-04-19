import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn, signUp, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    loggedIn: state.session.currentUser !== null,
    errors: state.session.errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const locationPath = ownProps.location.pathname.slice(1);
  const processForm = locationPath === "login" ? logIn : signUp;
  return {
    processForm: (user) =>  dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

//onClick in the link in session form
//in the onEnter function in the routg
