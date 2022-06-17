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
    categoryTags?: any
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
        categoryTags
    } = props;

    const formattedFutureDate = moment(moment(date).format("YYYY-MM-DD") + ' ' + time);

    const differenceInHours = formattedFutureDate.diff(new Date(), "hours");
    return (
        <>
            <CardWithContentStyle>
                <img
                    src="/images/sample.png"
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
                                {buttonText ? buttonText : "Reserved"}
                            </FilledButtonStyle>
                        ) : (
                            <OutlineButtonStyle
                                onClick={handleButtonClick}
                                width="100px"
                                height="54px"
                            >
                                {buttonText ? buttonText : "Reserved"}
                            </OutlineButtonStyle>
                        )}
                    </div>

                    <div className="row-wrapper">
                        <div>
                            <h4 className="heading">{time}</h4>
                            <p className="description">{`${differenceInHours} ${differenceInHours === 1 ? "Hour" : "Hours"}`}</p>
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
