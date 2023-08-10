import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((el) => {
    return (
      <VideoItem key={el.id.videoId} video={el} onVideoSelect={onVideoSelect} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
