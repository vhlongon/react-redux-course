import React, {Component} from 'react';

// actually the props is the parameter, but using es6 destructuring we can this to get the video property
// directly from props, instead of declarion (props) then
// const video = props.video;
const VideoListItem = ({video}) => {
  //
  console.log(video);
  return (
    <li className="video-list-item">
      <div className="media-object">
        <div className="media-object-section">
          <div className="thumbnail">
            <img src={video.snippet.thumbnails.default.url} />
          </div>
        </div>
        <div className="media-object-section">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
