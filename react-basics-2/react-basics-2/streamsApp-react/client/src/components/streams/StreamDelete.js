import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import history from '../../history';

import Modal from '../UI/Modal';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.onFetchSelectedStream(this.props.match.params.id);
  }

  renderActions = () => {
    if (!this.props.selectedStream) {
      return;
    }
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            this.props.onDeleteStream(this.props.selectedStream.id);
          }}
        >
          Delete
        </button>
        <button
          className="ui button primary"
          onClick={() => {
            history.replace('/');
          }}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.selectedStream) {
      return 'Are you sure you want to delete this stream ?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.selectedStream.title}`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        action={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
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
    onDeleteStream: (id) => {
      dispatch(actions.deleteStream(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
