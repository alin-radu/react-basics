import jsonPlaceholderAxios from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const allPosts = getState().posts;
    const uniqueIds = [...new Set(allPosts.map((el) => el.userId))];
    uniqueIds.forEach((el) => dispatch(fetchUser(el)));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholderAxios.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholderAxios.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  };
};

//solution with Lodash _.memoization
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholderAxios.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
