import React from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';
import enhanceWithClickOutside from 'react-click-outside';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = { dateHidden: true, task: { list_id: this.props.params.id, title: "", estimate_time: 0, completed: false, due: new Date() } };
    this.state = merge({}, this.defaultState);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDateHidden = this.toggleDateHidden.bind(this);
  }

  update(type) {
    return (e) => {
      if(type === "due") {
        let newDue = e.target.value;
        if(e.target.type === "time") {
          newDue = new Date(this.state.task.due);
          newDue.setHours(e.target.valueAsDate.getHours());
          newDue.setMinutes(e.target.valueAsDate.getMinutes());
        }
        let newState = merge({}, this.state);
        newState.task[type] = newDue;
        this.setState(newState);
      } else {
        let newState = merge({}, this.state);
        newState.task[type] = e.target.value;
        this.setState(newState);
      }
    };
  }

  componentWillReceiveProps(newProps) {
    let newState = merge({}, this.defaultState);
    newState.task.list_id = newProps.params.id;
    this.setState(newState);

    if(this.props.params.id != newProps.params.id) {
      this.props.clearErrors();
    }
  }

  componentDidMount() {
    let newState = merge({}, this.defaultState);
    newState.task.list_id = this.props.params.id;
    this.setState(newState);
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
    this.props.clearErrors();
  }

  render() {
    let titleErrors = "";
    let dueErrors = "";

    if(this.props.errors) {
      if(this.props.errors.title){
        titleErrors = <p id="title-errors">{`Title ${this.props.errors.title}`}</p>;
      }

      if(this.props.errors.due) {
        dueErrors = <p id="title-errors">{`Due date ${this.props.errors.due}`}</p>;
      }
    }

    let dueInput = "";
    let dateVal = "";
    if(!this.state.dateHidden){
      dueInput = (
        <div className="hidden-input">
          <label> Due:
            <input type="date"
              className="task-date-input"
              value={ new Date(this.state.task.due).toISOString().substring(0, 10) }
              onChange={ this.update("due") } />

              <input type="time"
                onChange={ this.update("due") }/>
          </label>
          <br/>
          <div className="estimate-time-input">
            <p id="estimate">{ "Estimated Time To Complete:  "}</p>
            <input type="number" value={ this.state.task.estimate_time }
            onChange={ this.update("estimate_time")} />
            <p>{" mins"}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="new-task-form">
          { titleErrors }
          { dueErrors }
          <form onSubmit={ this.handleSubmit }>

            <input type="text"
              className="task-title-input"
              value={ this.state.task.title }
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
