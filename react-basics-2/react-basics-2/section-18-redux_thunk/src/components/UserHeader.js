import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div>
        <div className="header">{this.props.user.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((el) => el.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
