import React, {Component} from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelected={props.onVideoSelected} />
    );
  });

  return (
    <ul className="video-list">
      {videoItems}
    </ul>
  );
}

export default VideoList;
