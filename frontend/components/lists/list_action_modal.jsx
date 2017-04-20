import React from 'react';

const ListActionModal = (props) => {
  return (
      <div className="list-action-modal">
        <span className="list-action-option" onClick={ props.toggleModal }>Edit this List</span>
        <span className="list-action-option" onClick={ props.removeList }>Delete This List</span>
      </div>
  );
};

export default ListActionModal;
