import React from 'react'
import './button.scss'

const Button = (props) => {
  let classes = ['button']
  switch (props.btnType) {
    case 'danger':
      classes.push('danger')
      break
    case 'success':
      classes.push('success')
      break
    case 'submit':
      classes.push('submit')
      break
    case 'black':
      classes.push('black')
      break
    case 'remove':
      classes.push('remove')
      break
    case 'btn_info':
      classes.push('btn_info')
      break
    default:
      break
  }
  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Button
