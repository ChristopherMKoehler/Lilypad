import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = { dateHidden: true, task: { list_id: this.props.params.id, title: "", completed: false, due: new Date() } };
    this.state = this.defaultState;

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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    this.props.createTask(this.state.task).then(this.setState(this.defaultState));
  }

  toggleDateHidden (e) {
    let newState = merge({}, this.state);
    newState.dateHidden = !newState.dateHidden;
    this.setState(newState);
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
              value={ this.state.title }
              placeholder="New Task"
              onClick={ this.toggleDateHidden }
              onChange={ this.update("title") }/>

            { dueInput }

            <input type="submit"/>
          </form>
        </div>
    );
  }
}

export default withRouter(TaskForm);
