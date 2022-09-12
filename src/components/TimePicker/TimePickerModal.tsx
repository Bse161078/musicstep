import React, { useState } from "react";
import TimePickerModalStyle from "./TimePickerModal.style";
import TimePicker from "react-time-picker";
type TimePickerModalProps = {
  value: any;
  onChange: any;
  lable: string;
};
const TimePickerModal = (props: TimePickerModalProps) => {
  const { value, onChange, lable } = props;
  // const [value, onChange] = useState(new Date());

  return (
    <div className="dateTimepicker">
      <span className="input-label">{lable}</span>
      <div></div>
      <TimePicker
        onChange={(e: any) => onChange(e)}
        value={value}
        // isOpen={false}
        disableClock={true}
      />
    </div>
  );
};
export default TimePickerModal;

{
  /* <TicketModalStyle> */
}
{
  /* </TicketModalStyle> */
}
