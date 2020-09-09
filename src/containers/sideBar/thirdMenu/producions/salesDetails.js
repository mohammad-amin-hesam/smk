import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const SalesDetails = (props) => {
  let history = useHistory()

  const closeHandler = () => {
     history.push(`/productions`)
   }
  return (
    <div className="operation  report_details">
      <div className="form-title">
        <span>جزئیات فروش</span>
        <div className="submit-close">
          <button onClick={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      SalesDetails
    </div>
  )
}

export default SalesDetails