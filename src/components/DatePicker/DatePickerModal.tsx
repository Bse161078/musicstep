import React, { useState } from "react";
import DatePickerModalStyle from "./DatePickerModal.style";
import DatePicker from "react-date-picker";


type DatePickerModalProps = {
  value: any;
  onChange: any;
  lable: string;
};
const DatePickerModal = (props: DatePickerModalProps) => {
  const { value, onChange, lable } = props;
  // const [value, onChange] = useState(new Date());

  return (
    <DatePickerModalStyle>
      <label className="input-label">{lable}</label>
      <DatePicker locale="en-CA" onChange={(e: any) => onChange(e)} value={value} format={"MM-dd-yyyy"}/>
    </DatePickerModalStyle>
  );
};
export default DatePickerModal;
