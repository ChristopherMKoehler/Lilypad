import React from 'react';
import { Link } from 'react-router';

class ListIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={ `/lists/${this.props.list.id}` }>{ this.props.list.title }</Link>
      </li>
    );
  }
}

export default ListIndexItem;
