import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
