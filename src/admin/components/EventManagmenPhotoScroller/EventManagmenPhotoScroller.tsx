import React, { useState } from "react";
import { Radio } from "antd";
import { EventManagmenPhotoScrollerStyle } from "./EventManagmenPhotoScroller.style";
import { RadioButtonStyle } from "../RadioButton/RadioButton.style";
import { UploadFile } from "..";

const EventManagmenPhotoScroller = () => {
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState(1);
  return (
    <EventManagmenPhotoScrollerStyle>
      <p className="venue-heading">Venue Photos</p>
      <RadioButtonStyle>
        <Radio.Group onChange={onChange} value={value} className="radio-btns">
          <Radio value={1}>
            <span className="radio-description">
              Use same from Organizer Profile
            </span>
          </Radio>
          <Radio value={2}>
            <span className="radio-description">Add Specific Photos</span>
          </Radio>
        </Radio.Group>
        <div className="scroller-div"> 
           <UploadFile  />
        </div>
      </RadioButtonStyle>

    </EventManagmenPhotoScrollerStyle>
  );
};

export default EventManagmenPhotoScroller;
