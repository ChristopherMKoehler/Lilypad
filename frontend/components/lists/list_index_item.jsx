import React from 'react';
import { Link } from 'react-router';
import ListFormContainer from './list_form_container';
import ListActionModal from './list_action_modal';

class ListIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showModal: false, showActionModal: false };



    this.toggleModal = this.toggleModal.bind(this);
    this.removeList = this.removeList.bind(this);
    this.toggleActionModal = this.toggleActionModal.bind(this);
  }


  toggleModal(e) {
    this.setState({ showModal: !this.state.showModal });
  }

  removeList(e) {
    this.props.deleteList(this.props.list.id);
  }

  toggleActionModal(e) {
    this.setState({ showActionModal: !this.state.showActionModal });
  }

  render() {
    return (
      <li className="list-list-el">
        <Link to={ `/lists/${this.props.list.id}` }>{ this.props.list.title }</Link>
        <button onClick={ this.toggleActionModal }>V</button>
        { this.state.showActionModal && <ListActionModal toggleActionModal={ this.toggleActionModal } removeList={ this.removeList } toggleModal={ this.toggleModal }/>}
        { this.state.showModal && <ListFormContainer list={ this.props.list } formType="edit" toggleModal={ this.toggleModal }/>}
      </li>
    );
  }
}

export default ListIndexItem;
