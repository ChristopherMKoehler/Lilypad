import React from 'react';
import ListIndexItemContainer from './list_index_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLists: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  toggleShow(e) {
    this.setState({ showLists: !this.state.showLists });
  }

  render() {
    let lists = Object.keys(this.props.lists).map((listId) => (
      <ListIndexItemContainer key={ listId } list={ this.props.lists[listId] }/>
    ));

    lists = this.state.showLists ? lists : "";

    return (
      <div className="list-nav">
        <span onClick={ this.toggleShow }>Lists</span>
        <ul>
          { lists }
        </ul>
      </div>
    );
  }
}

export default ListIndex;
