import React from 'react';
import { withRouter } from 'react-router';

class ListTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = null;
    if(this.props.list) {
      title = this.props.list.title;
    }

    let totalTasksCount = 0;
    let completedTasksCount = 0;

    if(this.props.tasks) {
      let allTasks = Object.keys(this.props.tasks).filter((taskId) => taskId != "errors")
        .map((taskId) => this.props.tasks[taskId]);
      totalTasksCount = allTasks.length;
      for(let i = 0; i < totalTasksCount; i++) {
        if(allTasks[i].completed) {
          completedTasksCount++;
        }
      }
    }

    return (
      <div className="list-show-container">
        <h1>{ title || "All Tasks" }</h1>
        <div className="count-holder">
          <p>{ totalTasksCount }</p>
          <p>tasks</p>
        </div>

        <div className="count-holder">
          <p>{ completedTasksCount || 0 }</p>
          <p>completed</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ListTitle);
