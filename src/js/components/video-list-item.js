import React, {Component} from 'react';

// actually the props is the parameter, but using es6 destructuring we can this to get the video property
// directly from props, instead of declarion (props) then
// const video = props.video;
const VideoListItem = ({video, onVideoSelected}) => {
  //
  return (
    <li onClick={() => onVideoSelected(video)} className="video-list-item">
      <div className="media-object">
        <div className="media-object-section middle">
          <div className="thumbnail">
            <img src={video.snippet.thumbnails.default.url} />
          </div>
        </div>
        <div className="media-object-section middle">
          <h4>{video.snippet.title}</h4>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
