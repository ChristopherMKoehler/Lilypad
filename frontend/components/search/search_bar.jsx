import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchParams: "" };
    this.updateSearchParams = this.updateSearchParams.bind(this);
    this.dispatchToSearchResults = this.dispatchToSearchResults.bind(this);
  }

  updateSearchParams(e) {
    this.setState({ searchParams: e.target.value });
  }

  dispatchToSearchResults(e) {
    this.props.receiveSearchParams(this.state);
    this.props.router.push("/home/search");
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.dispatchToSearchResults } >
          <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
          <input type="text" onChange={ this.updateSearchParams } placeholder="Search Tasks"/>
        </form>
      </div>
    );
  }
}
// <input type="submit"  />

export default withRouter(SearchBar);
