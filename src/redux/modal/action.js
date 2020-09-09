import {
  CLOSE_MODAL,
  SHOW_MODAL,
  TOGGLE_MODAL,
  SET_MODAL_TYPE
} from '../../constants/actionTypes'

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

export const showModal = () => ({
  type: SHOW_MODAL
})
export const closeModal = () => ({
  type: CLOSE_MODAL
})
export const setModalType = (payload) => ({
  type: SET_MODAL_TYPE,
  payload
})
