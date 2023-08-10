import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id:
            '383559794755-23gheh6vhlq0no0tskcg1kkh3iofl8rj.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.onSignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.onSignOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (userId) => {
      dispatch(actions.signIn(userId));
    },
    onSignOut: () => {
      dispatch(actions.signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
