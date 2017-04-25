import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';
import enhanceWithClickOutside from 'react-click-outside';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = { dateHidden: true, task: { list_id: this.props.params.id, title: "", completed: false, due: new Date() } };
    this.state = merge({}, this.defaultState);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDateHidden = this.toggleDateHidden.bind(this);
  }

  update(type) {
    return (e) => {
      let newState = merge({}, this.state);
      newState.task[type] = e.target.value;
      this.setState(newState);
    };
  }

  componentWillReceiveProps(newProps) {
    let newState = merge({}, this.defaultState);
    newState.task.list_id = newProps.params.id;
    this.setState(newState);
  }

  componentDidMount() {
    let newState = merge({}, this.defaultState);
    newState.task.list_id = this.props.params.id;
    this.setState(newState);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    if(this.props.params.id === "all_tasks") {
      let newState = merge({}, this.defaultState);
      newState.task.list_id = 0;
      this.setState(newState);
    }
    this.props.createTask(this.state.task).then(this.setState(this.defaultState));
  }

  toggleDateHidden (e) {
    if(this.state.dateHidden) {
      let newState = merge({}, this.state);
      newState.dateHidden = !newState.dateHidden;
      this.setState(newState);
    }
  }

  handleClickOutside() {
    this.setState(this.defaultState);
  }

  render() {
    let titleErrors = "";
    if(this.props.errors) {
      if(this.props.errors.title){
        titleErrors = <p id="title-errors">{`Title ${this.props.errors.title}`}</p>;
      }
    }

    let dueInput = "";
    if(!this.state.dateHidden){
      dueInput = (
        <label> Due:
          <input type="date"
            className="task-date-input"
            value={ this.state.due }
            onChange={ this.update("due") } />
        </label>
      );
    }
    return (
      <div className="new-task-form">
          { titleErrors }
          <form onSubmit={ this.handleSubmit }>

            <input type="text"
              className="task-title-input"
              value={ this.state.title }
              placeholder="New Task"
              onClick={ this.toggleDateHidden }
              onChange={ this.update("title") }/>

            { dueInput }

            <input type="submit" className="submit" value="Add New Task!"></input>
          </form>
        </div>
    );
  }
}

export default withRouter(enhanceWithClickOutside(TaskForm));
