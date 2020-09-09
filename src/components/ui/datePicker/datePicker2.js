import React, { Component } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";
import "./datePicker2.scss";

class Calender2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueDate: "1398/06/25",
      valueDateTime: "تاریخ: 1396/08/26 ساعت: 18:30",
      valueRDateStart: "1398/06/25",
      valueRDateEnd: "1398/06/25",
      valueRDateTimeStart: "تاریخ: 1396/08/26 ساعت: 18:30",
      valueRDateTimeEnd: "تاریخ: 1396/08/26 ساعت: 18:30",
    };
  }
  change = (unix, formatted) => {
    this.setState({
      valueDate: formatted,
    });
  };
  DatePickerInput(props) {
    return <input className="popo" {...props} />;
  }
  render() {
    return (
      <DatePicker
        // inputComponent={this.DatePickerInput}
        placeholder="----/--/--"
        format="jYYYY/jMM/jDD"
        onChange={this.change}
        id="datePicker"
        customClass="custom_size_calendar"
        // preSelected="1396/05/15"
      />
    );
  }
}

export default Calender2;
