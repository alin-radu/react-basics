import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions/index';

import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.onFetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((el) => {
      return (
        <div className="item" key={el.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
            <UserHeader userId={el.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPostsAndUsers: () => dispatch(fetchPostsAndUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
