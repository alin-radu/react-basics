import React from 'react';
import { connect } from 'react-redux';

import Spinner from './UI/Spinner'

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <React.Fragment>
              <Spinner />
              <p>Please select a song...</p>
          </React.Fragment>
  }

  return (
    <div>
      <br />
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return (
  {selectedSong: state.selectedSong}
  )
};

export default connect(mapStateToProps)(SongDetail);
