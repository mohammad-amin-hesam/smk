import React from 'react'
import moment from 'jalali-moment'

const Calender = () => {
  return (
    <div>
      <p>{moment().locale('fa').format('YYYY/MM/DD')}</p>
    </div>
  )
}

export default Calender
