import {
  CLOSE_MODAL,
  SHOW_MODAL,
  TOGGLE_MODAL,
  SET_MODAL_TYPE
} from '../../constants/actionTypes'

const INIT_STATE = {
  modalType: ''
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return { ...state, modalType: "" }
    case 'SET_MODAL_TYPE':
      return { ...state, modalType: action.payload }
    default:
      return { ...state }
  }
}
