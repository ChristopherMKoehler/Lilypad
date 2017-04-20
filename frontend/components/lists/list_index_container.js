import { connect } from 'react-redux';
import { fetchLists, updateList, deleteList } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    deleteList: (list) => dispatch(deleteList(list)),
    updateList: (list) => dispatch(updateList(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);
