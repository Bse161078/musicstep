import React from "react";
import {StarIcon} from "../../assets";
import {LogoWithHeadingStyle} from "./LogoWithHeading.style";

type LogoWithHeadingProps = {
    heading?: string;
    logo?: string;
    averageRating?: Number;
    reviewCount?: Number;
};
const LogoWithHeading = ({
                             heading = "Event Name",
                             logo,
                             averageRating,
                             reviewCount
                         }: LogoWithHeadingProps) => {

    const getRating = (rating: any) => {
        return rating > 0 ? ((rating / 100) * 5).toFixed(1) : 0
    }
    const ReviewText=reviewCount===1?`${reviewCount} Review`:`${reviewCount} Reviews`

    return (
        <LogoWithHeadingStyle>
            <img
                style={{
                    width: "160px",
                    height: "150px",
                    borderRadius: "10px",
                }}
                src={process.env.REACT_APP_BASE_URL + "/images/" + logo}
                className="logo"
                alt="logo"
            />
            <div className="content-wrapper">
                <h1 className="heading">{heading}</h1>

                <div className="content">
                    <StarIcon /> {getRating(averageRating)} <span>({ReviewText})</span>
                </div>
            </div>
        </LogoWithHeadingStyle>
    );
};

export default LogoWithHeading;
