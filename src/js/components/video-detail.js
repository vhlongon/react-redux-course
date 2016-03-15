import React, {Component} from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId,
    url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="flex-video">
        <iframe src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
