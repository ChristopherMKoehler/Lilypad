import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitHidden: true, task: props.task };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if(!this.props.task) {
      this.props.fetchTask(this.props.params.taskId);
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.task != newProps.task) {
      let newState = merge({}, this.state);
      newState.task = newProps.task;
      this.setState(newState);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTask(this.state.task);
    let newState = merge({}, this.state);
    newState.submitHidden = true;
    this.setState(newState);
  }

  toggleSubmit(e) {
    if(this.state.submitHidden){
      let newState = merge({}, this.state);
      newState.submitHidden = !newState.submitHidden;
      this.setState(newState);
    }
  }

  update(type) {
    return e => {
      let newState = merge({}, this.state);
      newState.task.title = e.target.value;
      this.setState(newState);
    };
  }

  handleDelete(e) {
    this.props.deleteTask(this.props.task.id);
    this.props.router.push(`home/lists/${this.props.params.id}`);
  }

  handleListChange(e) {
    let newState = merge({}, this.state);
    newState.task.list_id = parseInt(e.target.value);
    this.setState(newState);
    this.props.updateTask(newState.task).then(
      () => {
        if(!(this.props.params.id === "all_tasks")){
          this.props.removeTask(this.props.task);
        }
        this.props.router.push(`home/lists/${this.props.params.id}`);
      }
    );
  }

  render() {
    let submit = "";
    if(!this.state.submitHidden) {
      submit = <input type="submit" className="task-button" value="Change Title"/>;
    }

    let taskListId = this.props.params.id;
    let listOptions = Object.keys(this.props.lists).map((listId) => (
      <option key={ listId }
        className="list-option"
        value={ listId }>
        { this.props.lists[listId].title }</option>
    ));

    if(!this.props.task) {
      return <div></div>;
    }

    let formattedDate = "";
    if(this.state.task.due){
      let taskDate = new Date(this.state.task.due);
      formattedDate = <p>{ taskDate.toString() }</p>;
    }
    
    return (
      <div className="task-show">
        <form className="task-form" onSubmit={ this.handleSubmit }>
          <input type="text"
            className="task-title-display"
             onClick={ this.toggleSubmit }
             onChange={this.update("title")}
             value={ this.state.task.title }/>
          { submit }
        </form>

        <p>Due:</p>
        { formattedDate }

        <p>List</p>
          <select value={ this.props.task.list_id }
            className="list-select" onChange={this.handleListChange }>
            <option value="0" disabled>Select a list</option>
            { listOptions }
          </select>

        <button className="task-button" onClick={ this.handleDelete }>Delete this task</button>
      </div>
    );
  }
}

export default withRouter(TaskShow);
