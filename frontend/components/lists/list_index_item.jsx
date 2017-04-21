import React from 'react';
import { Link, withRouter } from 'react-router';
import ListFormContainer from './list_form_container';
import ListActionModal from './list_action_modal';

class ListIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showModal: false, showActionModal: false };


    this.handleShow = this.handleShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.removeList = this.removeList.bind(this);
    this.toggleActionModal = this.toggleActionModal.bind(this);
  }

  handleShow(e) {
    this.props.router.push(`/lists/${this.props.list.id}`);
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
      <li className="list-list-el" >
        <div className="list-title-container" onClick={ this.handleShow }>
          <span>{ this.props.list.title }</span>
        </div>

        <i id={ this.props.list.id } className="fa fa-cog" onClick={ this.toggleActionModal } aria-hidden="true"></i>

        { this.state.showActionModal && <ListActionModal id={ this.props.list.id }toggleActionModal={ this.toggleActionModal } removeList={ this.removeList } toggleModal={ this.toggleModal }/>}
        { this.state.showModal && <ListFormContainer list={ this.props.list } formType="edit" toggleModal={ this.toggleModal }/>}
      </li>
    );
  }
}


export default withRouter(ListIndexItem);
