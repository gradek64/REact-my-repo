import { combineReducers } from 'redux';

const modalReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, modalID: action.modalID };
    case 'CLOSE_MODAL':
      return { open: false, modalID: action.modalID };
    default:
      return state;
  }
};

export default combineReducers({
  modalReducer,
});
