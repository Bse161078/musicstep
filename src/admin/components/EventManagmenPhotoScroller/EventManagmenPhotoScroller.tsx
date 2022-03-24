import React, { useState } from "react";
import { Radio } from "antd";
import { EventManagmenPhotoScrollerStyle } from "./EventManagmenPhotoScroller.style";
import { RadioButtonStyle } from "../RadioButton/RadioButton.style";
import { Slider } from "../../../components";

type EventManagmenPhotoScrollerProps = {
  setField?: any;
  eventPhotoSameAsOrganizerPhoto?: Boolean;
  previewVenuePhoto?: any;
  handleAdditionalPhoto?: any;
  handleImageClick?: any;
  previewVenuePhotoOfOrganizer?: any;
};
const EventManagmenPhotoScroller = ({
  setField,
  eventPhotoSameAsOrganizerPhoto,
  previewVenuePhoto,
  handleAdditionalPhoto,
  previewVenuePhotoOfOrganizer,
}: EventManagmenPhotoScrollerProps) => {
  const onChange = (e: any) => {
    setValue(e.target.value);
    setField(
      "eventPhotoSameAsOrganizerPhoto",
      e.target.value
      // === 1 ? true : false
    );
  };
  const [value, setValue] = useState(1);

  return (
    <EventManagmenPhotoScrollerStyle>
      <p className="venue-heading">Venue Photos</p>
      <RadioButtonStyle>
        <Radio.Group
          onChange={onChange}
          value={eventPhotoSameAsOrganizerPhoto}
          className="radio-btns"
        >
          <Radio value={true}>
            <span className="radio-description">
              Use same from Organizer Profile
            </span>
          </Radio>
          <Radio value={false}>
            <span className="radio-description">Add Specific Photos</span>
          </Radio>
        </Radio.Group>
        <div className="scroller-div">
          {eventPhotoSameAsOrganizerPhoto ? (
            <Slider previewAdditionalImage={previewVenuePhotoOfOrganizer} />
          ) : (
            <Slider
              handleAdditionalPhoto={handleAdditionalPhoto}
              previewAdditionalImage={previewVenuePhoto}
            />
          )}
        </div>
      </RadioButtonStyle>
    </EventManagmenPhotoScrollerStyle>
  );
};

export default EventManagmenPhotoScroller;
