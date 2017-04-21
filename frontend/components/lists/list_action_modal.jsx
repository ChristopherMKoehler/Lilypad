import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class ListActionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside(e) {
    let targetClass = e.target.getAttribute('class');
    let targetId = parseInt(e.target.getAttribute('id'));

    if(targetClass !== 'list-action-option' && targetId !== this.props.id){
      this.props.toggleActionModal();
    }
  }


  render() {
    return (
      <div className="list-action-modal">
        <span className="list-action-option" onClick={ this.props.toggleModal }>Edit this List</span>
        <span className="list-action-option" onClick={ this.props.removeList }>Delete This List</span>
      </div>
    );
  }
}

export default enhanceWithClickOutside(ListActionModal);
