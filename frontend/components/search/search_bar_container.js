import { connect } from 'react-redux';
import { receiveSearchParams } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearchParams: (searchParams) => dispatch(receiveSearchParams(searchParams))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
