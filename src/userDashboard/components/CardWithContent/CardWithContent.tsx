import React, {useState} from "react";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {GuestListModal} from "../../Modals";
import {CardWithContentStyle} from "./CardWithContent.style";
import moment from "moment";

type CardWithContentProps = {
    heading: string;
    time: string;
    footerText: string;
    buttonType?: "filled" | "outlined";
    buttonText?: string;
    onButtonClick?: any;
    handleButtonClick?: any;
    date?: any;
    originalTime?: any;
    categoryTags?: any;
    reservation?: any;
};

const CardWithContent = (props: CardWithContentProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {
        heading,
        time,
        footerText,
        buttonType,
        buttonText,
        handleButtonClick,
        date,
        originalTime,
        categoryTags,
        reservation
    } = props;

    const formattedFutureDate = moment(moment(date).format("YYYY-MM-DD") + ' ' + time);

    const differenceInHours = formattedFutureDate.diff(new Date(), "hours");


    let imageUrl = null;

    if (reservation && reservation.venueInfo && (reservation.venueInfo).length > 0) {
        imageUrl = reservation.venueInfo[0].logoUrl;
    }


    let hours = 0;
    if (reservation && reservation.eventInfo && (reservation.eventInfo).length > 0) {
        hours = moment(reservation.eventInfo[0].state).diff(new Date(), "hours");
    }


    return (
        <>
            <CardWithContentStyle>
                <img
                    src={imageUrl ? `${process.env.REACT_APP_BASE_URL}/images/${imageUrl}` : "/images/sample.png"}
                    style={{width: 92, height: 92, borderRadius: 10}}
                    className="card-thumbnail"
                    alt="thumbnail"
                />

                <div>
                    <div className="row-wrapper">
                        <div>
                            <h4 className="heading">{heading}</h4>
                            <p className="description">{categoryTags.join(",")}</p>
                        </div>
                        {buttonType === "filled" ? (
                            <FilledButtonStyle
                                onClick={handleButtonClick}
                                buttonType="dark"
                                width="100px"
                                height="54px"
                            >
                                {buttonText ? buttonText : "Cancel"}
                            </FilledButtonStyle>
                        ) : (
                            <OutlineButtonStyle
                                onClick={handleButtonClick}
                                width="100px"
                                height="54px"
                            >
                                {buttonText ? buttonText : "Cancel"}
                            </OutlineButtonStyle>
                        )}
                    </div>

                    <div className="row-wrapper">
                        <div>
                            <h4 className="heading">{time}</h4>
                            <p className="description">{`${hours} ${hours === 1 ? "Hour" : "Hours"}`}</p>
                        </div>

                    </div>
                </div>
            </CardWithContentStyle>
            <GuestListModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </>
    );
};

export default CardWithContent;
