import { connect } from 'react-redux';
import { fetchTasksByList, updateTask, fetchAllTasks } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state, ownProps) => {
  let tasks = state.tasks;

  if(ownProps.location.pathname.indexOf("search") >= 0) {
    let allTasks = Object.keys(state.tasks).filter((taskId) => (
      taskId !== "errors"
    )).map((taskId) => state.tasks[taskId]);

    if(state.searchParams.searchParams){
      tasks = allTasks.filter((task) => (
        task.title.toLowerCase().indexOf(state.searchParams.searchParams.toLowerCase()) >= 0
      ));
    }

  }
  return {
    tasks,
    searchParams: state.searchParams.searchParams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasksByList: (listId) => dispatch(fetchTasksByList(listId)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchAllTasks: () => dispatch(fetchAllTasks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
