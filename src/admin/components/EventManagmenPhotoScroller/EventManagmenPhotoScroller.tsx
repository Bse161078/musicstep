import React, {useState} from "react";
import {Radio} from "antd";
import {EventManagmenPhotoScrollerStyle} from "./EventManagmenPhotoScroller.style";
import {RadioButtonStyle} from "../RadioButton/RadioButton.style";
import {Slider as CustomSlider} from "../../../components";

type EventManagmenPhotoScrollerProps = {
    setField?: any;
    eventPhotoSameAsOrganizerPhoto?: Boolean;
    previewVenuePhoto?: any;
    handleAdditionalPhoto?: any;
    handleImageClick?: any;
    previewVenuePhotoOfOrganizer?: any;
    form?:any;
    onDeleteFile?:any
};
const EventManagmenPhotoScroller = ({
                                        setField,
                                        eventPhotoSameAsOrganizerPhoto,
                                        previewVenuePhoto,
                                        handleAdditionalPhoto,
                                        previewVenuePhotoOfOrganizer,
                                        form,
                                        onDeleteFile
                                    }: EventManagmenPhotoScrollerProps) => {
    const onChange = (e: any) => {
        setValue(e.target.value);
        setField(
            "eventPhotoSameAsOrganizerPhoto",
            e.target.value
            // === 1 ? true : false
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
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
                        <CustomSlider previewAdditionalImage={previewVenuePhotoOfOrganizer}
                                      onDeleteFile={onDeleteFile}
                                      form={form}
                        />
                    ) : (
                        <CustomSlider
                            handleAdditionalPhoto={handleAdditionalPhoto}
                            previewAdditionalImage={previewVenuePhoto}
                            form={form}
                            onDeleteFile={onDeleteFile}
                        />
                    )}
                </div>
            </RadioButtonStyle>
        </EventManagmenPhotoScrollerStyle>
    );
};

export default EventManagmenPhotoScroller;
