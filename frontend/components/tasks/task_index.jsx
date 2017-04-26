import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';
import ListTitleContainer from '../lists/list_title_container';

class TaskIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps) {
     if(newProps.params.id != this.props.params.id){
       if(newProps.params.id === "all_tasks") {
         this.props.fetchAllTasks();
       } else {
         this.props.fetchTasksByList(newProps.params.id);
       }
    }
  }

  componentDidMount() {
    if(this.props.params.id === "all_tasks") {
      this.props.fetchAllTasks();
    } else {
      this.props.fetchTasksByList(this.props.params.id);
    }
  }

  render() {
    let tasks = Object.keys(this.props.tasks).filter((taskId) => (
      taskId !== "errors"
    )).map((taskId) => {
      return <TaskIndexItem key={ taskId } updateTask={ this.props.updateTask } task={ this.props.tasks[taskId] } />;
    });

    return (
      <div className="tasks-body">
        <div className="task-index">
          <ListTitleContainer listId={ this.props.params.id } tasks={ this.props.tasks }/>
          <TaskFormContainer />
          <ul className="task-list">
            { tasks }
          </ul>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default TaskIndex;
