import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.onFetchSelectedStream(this.props.match.params.id);
  }

  onSubmitHandler = (formValues) => {
    this.props.onStreamEdit(this.props.match.params.id, formValues);
  };

  renderStream = () => {
    if (!this.props.selectedStream) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.selectedStream.title,
            description: this.props.selectedStream.description,
          }}
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  };

  render() {
    return <div>{this.renderStream()}</div>;
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
    onStreamEdit: (id, formValues) => {
      dispatch(actions.editStream(id, formValues));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
