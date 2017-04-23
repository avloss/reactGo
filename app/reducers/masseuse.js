import { combineReducers } from 'redux';
import * as types from '../types';

const masseuses = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    default:
      return state;
  }
};

const masseuseReducer = combineReducers({
  masseuses
});

export default masseuseReducer;