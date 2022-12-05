import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWidget = ({ handleDatePick }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date)
    handleDatePick(date)
  }

  return (
    <DatePicker selected={startDate} onChange={(date) => handleChange(date)} className="react-datapicker__input-text" 
        style={{ bg: 'orange' }}
    />
  );
};

export default DatePickerWidget