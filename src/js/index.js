import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import css from '../scss/styles.scss';

const API_KEY = 'AIzaSyAkR_KUryY_eCDzpRGYIWEvYpI2yI2rSmc';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // same as this.setState({videos: videos}) using destructuring
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }


  render = () => {
    return (
      <div className="video-player">
        <h1>{this.props.title}</h1>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title={'React video player'} />,
  document.querySelector('.react-root')
);
