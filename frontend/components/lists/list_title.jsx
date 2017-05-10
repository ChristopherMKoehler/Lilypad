import React from 'react';
import { withRouter } from 'react-router';

class ListTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  getEstimateCompleteTime(allTasks) {
    if(allTasks.length === 0){
      return "";
    }
    let timeInMinutes = allTasks.filter((task) => !task.completed).reduce((accum, task) => accum + task.estimate_time, 0);
    return `Estimate Time to Complete: ${timeInMinutes} minutes`;
  }

  render() {
    let title = null;
    if(this.props.list) {
      title = this.props.list.title;
    } else if(this.props.router.location.pathname.indexOf("search") >= 0) {
      title = "Search Results";
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
        <div className="list-show-top">
          <h1>{ title || "All Tasks" }</h1>
        </div>
        <div className="counts">
          <div className="count-holder">
            <p>{ totalTasksCount }</p>
            <p>tasks</p>
          </div>

          <div className="count-holder">
            <p>{ completedTasksCount || 0 }</p>
            <p>done</p>
        </div>
      </div>
        <div>
          <p>{ completionEstimate }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ListTitle);
