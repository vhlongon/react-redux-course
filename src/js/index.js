import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import _ from 'lodash';

import css from '../scss/styles.scss';

const API_KEY = 'AIzaSyAkR_KUryY_eCDzpRGYIWEvYpI2yI2rSmc';


class VideoPlayer extends Component {

  //Set props validation
  static propTypes = {
      title: React.PropTypes.string.isRequired,
      initialTerm: React.PropTypes.string.isRequired,
      maxResults: React.PropTypes.number
  };

  //Set default props
  static defaultProps = {
    title: 'React youtube video player',
    initialTerm: 'dogs',
    maxResults: 5
  };

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //start the component with this term
    let initialTerm = 'dogs';
    this.videoSearch(this.props.initialTerm);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term, maxResults: this.props.maxResults}, (videos) => {
      // same as this.setState({videos: videos}) using destructuring
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render = () => {
    // here we use lodash to debounce/call the videoSearch funtion every 300 ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="video-player">
        <h1>{this.props.title}</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

//Render component
ReactDOM.render(
  <VideoPlayer />,
  document.querySelector('.react-root')
);
