import React, { useState } from "react";
import DatePickerModalStyle from "./DatePickerModal.style";
import DatePicker from "react-date-picker";
import moment from "moment";


type DatePickerModalProps = {
  value: any;
  onChange: any;
  lable: string;
};
const DatePickerModal = (props: DatePickerModalProps) => {
  const { value, onChange, lable } = props;
  // const [value, onChange] = useState(new Date());

    console.log(value,"   ",value && moment(value).format('MM'))
    const day=value && moment(value).format('DD');
    const month=value && moment(value).format('MM');
    return (

      <>
              <DatePickerModalStyle day={day} month={month}>
                  <label className="input-label">{lable}</label>
                  <DatePicker locale="en-CA" onChange={(e: any) => onChange(e)} value={value} format={"MM-dd-yyyy"}/>
              </DatePickerModalStyle>
          </>
  );
};
export default DatePickerModal;
