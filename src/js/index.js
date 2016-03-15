import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';

import css from '../scss/styles.scss';

const API_KEY = 'AIzaSyAkR_KUryY_eCDzpRGYIWEvYpI2yI2rSmc';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {videos: {}};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // same as this.setState({videos: videos}) using destructuring
      this.setState({videos});
    })
  }


  render = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.react-root')
);
