import React from 'react';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.allLists = this.props.fetchLists();
  }

  render() {
    return (
      <div className="task-show">

      </div>
    );
  }
}

export default TaskShow;
