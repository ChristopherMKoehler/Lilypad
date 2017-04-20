import React from 'react';

class ListActionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.offClickHandler = (e) => {
      if(e.target.attr('class') !== '.list-action-modal'){
        this.props.toggleActionModal();
      }
    };

    $(':not(.list-action-modal)').click(this.offClickHandler);
  }
  componentWillUnmount() {
    $(':not(.list-action-modal)').off("click", this.offClickHandler);
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

export default ListActionModal;
