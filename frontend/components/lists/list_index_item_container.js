import { connect } from 'react-redux';
import { updateList, deleteList } from '../../actions/list_actions';
import ListIndexItem from './list_index_item';
import { receiveSearchParams } from '../../actions/search_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: list => dispatch(updateList(list)),
    deleteList: list => dispatch(deleteList(list)),
    clearSearchParams: () => dispatch(receiveSearchParams({ searchParams: "" }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListIndexItem);
