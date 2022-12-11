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
    handleClick?: any;
    isDetails: boolean;
    fromPartner?: boolean
};

export const TabRow = (props: TabRowProps) => {
    const {
        buttonType,
        buttonText,
        event,
        reservation,
        subscribtionCredit,
        venue,
        handleClick,
        isDetails,
        fromPartner
    } = props;
    const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(
        false
    );
    const [isTicketsAvailabe, setIsTicketsAvailabe] = useState(true);
    const week = ["Mon", "Thu", "Wed", "Thr", "Fri", "Sat", "Sun"];

    let hours = moment(event.city).diff(event.state, "hours");
    let minutes = 0;
    if(event.startingTime && event.endingTime){
        let convertedStartTime=moment(event.startingTime,"hh:mm:ss");
        let convertedEndTime=moment(event.endingTime,"hh:mm:ss");


        if(parseInt(event.startingTime.split(":")[0])>parseInt(event.endingTime.split(":")[0])){
            convertedEndTime=convertedEndTime.add(1, 'days');
        }
        minutes=moment(convertedEndTime).diff(convertedStartTime, "hours");

    }
    let daysLeft = moment(event.state).diff(moment(new Date()), "days");
    let daysLeftLabel = "";

    if (daysLeft === 0) {
        daysLeftLabel = "Today"
    } else if (daysLeft === 1) {
        daysLeftLabel = "Tomorrow"
    } else {
        daysLeftLabel = "in " + daysLeft + " days"
    }

    if (daysLeft < 0) {
        daysLeftLabel = ""
    }

    console.log()
    return (
        <>
            <TabRowStyle>
                <div className="time">
          <span>
            {moment(event.state).format("ddd")},{" "}
              {moment(event.state).format("MMM") + " " + moment(event.state).date()}
          </span>
                    <span className="hour">
            {daysLeftLabel}
          </span>
                </div>
                <div className="time">
                    <span>{moment(event.startingTime, ["hh:mm"]).format("hh:mm a")}</span>
                    <span className="hour">
            { minutes>0 && minutes+ " hr"}
          </span>
                </div>
                <div className="name" style={{cursor: "pointer"}} onClick={(e) => {
                    // if (isDetails) setIsEventDetailsModalVisibel(true)
                    // else handleClick()
                    setIsEventDetailsModalVisibel(true);
                    if(buttonType === "filled"){
                        setIsTicketsAvailabe(false);
                    }else{
                        setIsTicketsAvailabe(true);
                    }
                }}>
                    <p style={{wordBreak: 'break-word'}}>{event.title}</p>
                    <p className="genre" style={{wordBreak: 'break-word'}}>{event.country && (event.country)}</p>

                </div>

                <div className="time">
                    <p className="person-number">
                        {buttonText !== "Reservations Full" &&
                        <>
                            <img alt="logout" src="/images/icons/profile.svg"/>
                            < span> {reservation}</span>
                        </>
                        }
                    </p>
                </div>
                {buttonType === "filled" ? (
                    <div>
                        {!fromPartner &&
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
                        }
                    </div>
                ) : (
                    <div>
                        {!fromPartner &&
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
                        }
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
                hideReserve={fromPartner}
            />
        </>
    );
};
