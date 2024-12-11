import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/index';

class StreamList extends Component {
  componentDidMount() {
    this.props.onFetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId && stream.userId !== null) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((el) => {
      return (
        <div className="item" key={el.id}>
          {this.renderAdmin(el)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${el.id}`}>
              {el.title}
            </Link>
            <div className="description">{el.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button positive" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams.streams,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStreams: () => {
      dispatch(actions.fetchStreams());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
