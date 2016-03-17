import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange = (term) => {
    this.setState({term: term});
    if(this.state.term.length >= 3) {
      this.props.onSearchTermChange(term);
    }
  }

  render = () => {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder="search after 3 caracters typed"
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
