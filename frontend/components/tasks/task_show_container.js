import { connect } from 'react-redux';
import { updateTask, deleteTask, fetchTask } from '../../actions/task_actions';
import { fetchLists } from '../../actions/list_actions';
import TaskShow from './task_show';


const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchLists: () => dispatch(fetchLists()),
    fetchTask: id => dispatch(fetchTask(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskShow);
