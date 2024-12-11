import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmitHandler = (formValues) => {
    this.props.onCreateStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmitHandler} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateStream: (formValues) => {
      dispatch(actions.createStream(formValues));
    },
  };
};

export default connect(null, mapDispatchToProps)(StreamCreate);
