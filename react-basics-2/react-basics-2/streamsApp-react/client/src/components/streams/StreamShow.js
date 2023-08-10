import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import * as actions from '../../actions/index';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const id = this.props.match.params.id ? this.props.match.params.id : null;

    this.props.onFetchSelectedStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
    this.flvPlayer.destroy();
  }

  buildPlayer = () => {
    if (this.flvPlayer || !this.props.selectedStream) {
      return;
    }
    const id = this.props.match.params.id ? this.props.match.params.id : null;
    this.flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  };

  render() {
    if (!this.props.selectedStream) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h2>{this.props.selectedStream.title}</h2>
        <h3>{this.props.selectedStream.description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStream: state.streams.selectedStream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSelectedStream: (id) => {
      dispatch(actions.fetchStream(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
