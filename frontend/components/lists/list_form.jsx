import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState || { title: "", due: new Date() };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    this.props.processForm(this.state).then(() => this.props.toggleModal());
  }

  render() {
    let title = this.props.formType === "edit" ? "Edit this list!" : "Add a list!";

    return (
      <div className="modal-screen" onClick={ this.props.toggleModal }>
        <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
          <h1>{ title }</h1>
          <form onSubmit={ this.handleSubmit }>
            <input type="text"
              value={ this.state.title }
              placeholder="Title"
              onChange={ this.update("title") }/>

            <label> Due:
              <input type="date"
                value={ this.state.due }
                onChange={ this.update("date") } />
            </label>

            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default ListForm;
