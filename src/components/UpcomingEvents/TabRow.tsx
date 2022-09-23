import React, {useState} from "react";
import moment from "moment";

import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../styles/Common.style";
import {EventDetailsModal} from "../EventDetailsModal";
import {TabRowStyle} from "./UpcomingEvents.style";

type TabRowProps = {
    buttonType?: string;
    buttonText?: string;
    buttonClick?: any;
    event?: any;
    reservation?: number;
    subscribtionCredit?: any;
    venue?: any;
};

export const TabRow = (props: TabRowProps) => {
    const {
        buttonType,
        buttonText,
        event,
        reservation,
        subscribtionCredit,
        venue,
    } = props;
    const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(
        false
    );
    const [isTicketsAvailabe, setIsTicketsAvailabe] = useState(true);
    const week = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];

    let hours = moment(event.city).diff(event.state, "hours");
    let minutes = (moment(event.city).diff(event.state, "minutes")% 60);

    return (
        <>
            <TabRowStyle>
                <div className="time">
          <span>
            {week[moment(event.date?.time?.toLocaleDateString("en-US")).day()]},{" "}
              {moment(event.date).date() + " " + moment(event.date).format("MMM")}
          </span>
                    <span className="hour">
            {moment(event.date).diff(moment(new Date()), "days")} days left
          </span>
                </div>
                <div className="time">
                    <span>{moment(event.startingTime, ["hh:mm"]).format("hh:mm a")}</span>
                    <span className="hour">
            {hours>0 && hours+" hr"} {minutes>0 && minutes+" mint"}
          </span>
                </div>
                <div className="name">
                    <p>{event.title}</p>
                    <p className="genre">{venue.categoryTags.join(",")}</p>
                </div>
                <div className="time">
                    <p className="person-number">
                        <img alt="logout" src="/images/icons/profile.svg"/>
                        <span>{reservation}</span>
                    </p>
                </div>
                {buttonType === "filled" ? (
                    <div>
                        <FilledButtonStyle
                            buttonType="dark"
                            width="150px"
                            height="43px"
                            onClick={() => {
                                setIsEventDetailsModalVisibel(true);
                                setIsTicketsAvailabe(false);
                            }}
                            // className="pricing"
                        >
                            {buttonText}
                        </FilledButtonStyle>
                    </div>
                ) : (
                    <div>
                        <OutlineButtonStyle
                            width="150px"
                            height="43px"
                            className="pricing"
                            onClick={() => {
                                setIsEventDetailsModalVisibel(true);
                                setIsTicketsAvailabe(true);
                            }}
                        >
                            {buttonText}
                        </OutlineButtonStyle>
                    </div>
                )}
            </TabRowStyle>
            <EventDetailsModal
                isModalVisible={isEventDetailsModalVisibel}
                setIsModalVisible={setIsEventDetailsModalVisibel}
                isTicketsAvailable={isTicketsAvailabe}
                event={event}
                subscribtionCredit={subscribtionCredit}
                venue={venue}
            />
        </>
    );
};
