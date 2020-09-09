import React from 'react'
import momentJalaali from 'moment-jalaali'
import { Calendar } from 'react-datepicker2'
import DatePicker from 'react-datepicker2'
import moment from 'moment-jalaali'

class Calender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: momentJalaali()
    }
  }
  render() {
    return (
      <DatePicker
        persianDigits={false}
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
        isGregorian={false}
        timePicker={false}
      />
    )
  }
 
}

export default Calender