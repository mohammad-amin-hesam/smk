import React from 'react'
import { connect } from 'react-redux'
import { toggleModal, showModal, closeModal } from '../../../redux/actions'
import './modal.scss'

const Modal = (props) => {
  return (
    <div
      className="modal"
      style={{
        transform: props.showModal ? 'show_modal' : 'close_modal',
         opacity: props.showModal ? '1' : '0',
        display: props.showModal ? 'block' : 'none'
      }}
    >
      {props.children}
    </div>
  )
}
const mapStateToProps = ({ open: { open: open } }) => ({
  open
})

export default connect(null, {
  toggleModal,
  showModal,
  closeModal
})(Modal)
