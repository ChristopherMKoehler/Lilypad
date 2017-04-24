import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';

class TaskIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasksByList(this.props.params.id);
  }

  render() {
    let tasks = Object.keys(this.props.tasks).map((taskId) => {
      return <TaskIndexItem key={ taskId } task={ this.props.tasks[taskId] } />;
    });
    return (
      <div>
        <TaskFormContainer />
        <ul>
          { tasks }
        </ul>
      </div>
    );
  }
}

export default TaskIndex;
