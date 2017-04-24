import { connect } from 'react-redux';
import { createTask, receiveErrors } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state) => {
  return {
    errors: state.lists.errors,
    dateHidden: true
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
