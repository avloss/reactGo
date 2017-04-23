import * as types from '../types';


export function openMasseuseModal(masseuse) {
  return {
    type: types.OPEN_MASSEUSE_MODAL,
    masseuse: masseuse
  };
}

export function closeMasseuseModal() {
  return {
    type: types.CLOSE_MASSEUSE_MODAL
  };
}