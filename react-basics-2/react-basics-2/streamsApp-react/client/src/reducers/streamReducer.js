import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  streams: [],
  selectedStream: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_STREAM:
      return {
        ...state,
        streams: [...state.streams, action.payload],
      };

    case actionTypes.FETCH_STREAMS:
      return {
        ...state,
        streams: [...action.payload],
      };

    case actionTypes.FETCH_STREAM:
      return {
        ...state,
        selectedStream: { ...action.payload },
      };

    case actionTypes.EDIT_STREAM:
      return {
        ...state,
        streams: [
          ...state.streams.map((el) =>
            el.id === action.payload.id ? action.payload : el
          ),
        ],
        selectedStream: null,
      };

    case actionTypes.DELETE_STREAM:
      return {
        ...state,
        streams: [...state.streams.filter((el) => el.id !== action.payload)],
        selectedStream: null,
      };

    default:
      return state;
  }
};
