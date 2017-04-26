import { connect } from 'react-redux';
import { fetchTasksByList, fetchAllTasks } from '../../actions/task_actions';
import ListTitle from './list_title';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists[ownProps.listId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasksByList: listId => dispatch(fetchTasksByList(listId)),
    fetchAllTasks: () => dispatch(fetchAllTasks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTitle);
