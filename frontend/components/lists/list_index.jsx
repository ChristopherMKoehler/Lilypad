import React from 'react';
import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from './list_form_container';
import merge from 'lodash/merge';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLists: false, showModal: false };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  toggleShow(e) {
    this.setState({ showLists: !this.state.showLists });
  }

  toggleModal(e) {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    let lists = merge({}, this.props.lists);
    delete lists.errors;

    lists = Object.keys(lists).map((listId) => (
      <ListIndexItemContainer key={ listId } list={ this.props.lists[listId] }/>
    ));

    return (
      <div className="list-nav">
        <div className="list-nav-head">
          <span className="list-nav-title" onClick={ this.toggleShow }>Lists</span>
          <i onClick={ this.toggleModal } id="plus-button" className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>

        { this.state.showLists && <ul className="list-list">{ lists }</ul> }
        { this.state.showModal && <ListFormContainer formType="create" toggleModal={ this.toggleModal }/>}
      </div>
    );
  }
}

export default ListIndex;
