import { combineReducers } from 'redux';
import * as types from '../types';

const masseuseModal = (
  state = {open:false, masseuse:{}},
  action
) => {
  switch (action.type) {
    case types.OPEN_MASSEUSE_MODAL:
      return {open:true, masseuse:action.masseuse};
    case types.CLOSE_MASSEUSE_MODAL:
      return {open:false, masseuse:{}};
    default:
      return state;
  }
};

const masseuseModalReducer = combineReducers({
  masseuseModal
});

export default masseuseModalReducer;