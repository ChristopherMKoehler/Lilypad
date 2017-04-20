import { connect } from 'react-redux';
import HomeHeader from './home_header';
import { logOut } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeHeader);
