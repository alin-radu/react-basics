import axiosStreams from '../apis/apiJsonServer';
import history from '../history';

import * as actionTypes from './actionTypes';

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await axiosStreams.post('/streams', {
      ...formValues,
      userId,
    });

    dispatch({
      type: actionTypes.CREATE_STREAM,
      payload: response.data,
    });

    history.push('/');
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await axiosStreams.get('/streams');

    dispatch({
      type: actionTypes.FETCH_STREAMS,
      payload: response.data,
    });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await axiosStreams.get(`/streams/${id}`);

    dispatch({
      type: actionTypes.FETCH_STREAM,
      payload: response.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await axiosStreams.patch(`/streams/${id}`, formValues); // second argument is body of put request

    dispatch({
      type: actionTypes.EDIT_STREAM,
      payload: response.data,
    });
    history.push('/');
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await axiosStreams.delete(`/streams/${id}`);

    dispatch({
      type: actionTypes.DELETE_STREAM,
      payload: id,
    });

    history.push('/');
  };
};
