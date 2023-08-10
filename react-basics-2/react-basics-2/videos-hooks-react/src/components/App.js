import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
