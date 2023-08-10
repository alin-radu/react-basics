import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions/index';

const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((el) => {
      return (
        <div className="item" key={el.title}>
            <br />
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.onSelectSong(el)}
            >
              Select
            </button>
          </div>
          <div className="content">{el.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    songs: state.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectSong: (song) => dispatch(selectSong(song)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
