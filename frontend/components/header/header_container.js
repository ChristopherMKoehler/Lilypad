import { connect } from 'react-redux';
import Header from './header';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
