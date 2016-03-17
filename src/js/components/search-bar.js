import React, {Component} from 'react';

class SearchBar extends Component {

  static propTypes = {
    onSearchTermChange: React.PropTypes.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange = (term) => {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }

  render = () => {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder="search for something on youtube"
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
