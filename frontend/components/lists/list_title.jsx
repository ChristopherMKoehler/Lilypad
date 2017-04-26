import React from 'react';
import { withRouter } from 'react-router';

class ListTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  getEstimateCompleteTime(allTasks) {

    let millisecondsEstimate = allTasks.reduce((accum, task) => (
      accum - new Date(task.due).getUTCMilliseconds()
    ), Date.now());

    let totalSeconds = millisecondsEstimate / 1000;
    let hours = totalSeconds / 3600;
    totalSeconds = totalSeconds % 3600;
    let minutes = totalSeconds / 60;
    totalSeconds = totalSeconds % 60;
    let seconds = totalSeconds;

    return `Estimated time until completion: ${~~hours} hrs, ${~~minutes} mins, ${~~seconds} secs`;
  }

  render() {
    let title = null;
    if(this.props.list) {
      title = this.props.list.title;
    }


    let totalTasksCount = 0;
    let completedTasksCount = 0;
    let completionEstimate = "";

    if(this.props.tasks) {
      let allTasks = Object.keys(this.props.tasks).filter((taskId) => taskId != "errors")
        .map((taskId) => this.props.tasks[taskId]);
      totalTasksCount = allTasks.length;
      for(let i = 0; i < totalTasksCount; i++) {
        if(allTasks[i].completed) {
          completedTasksCount++;
        }
      }
      completionEstimate = this.getEstimateCompleteTime(allTasks);
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

        <p>{ completionEstimate }</p>
      </div>
    );
  }
}

export default withRouter(ListTitle);
