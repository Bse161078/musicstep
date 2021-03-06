import React from "react";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

import {HeadingWithContentStyle} from "./HeadingWithContent.style";

type HeadingWithContentProps = {
    heading: string;
    content: any[];
    handleButtonClick: any;
};

const HeadingWithContent = (props: HeadingWithContentProps) => {
    const {heading, content, handleButtonClick} = props;

    return (
        <HeadingWithContentStyle>
            <Link to="/">
                <div className="button-wrapper" onClick={handleButtonClick}>
                    <LeftChevronIcon/> Back To Previous Page
                </div>
            </Link>

            <h2 className="heading">{heading}</h2>

            {content.map((data: any, index: number) => {
                return (
                    (typeof data === 'string' || data instanceof String) ?
                        (<p className="description" key={`description-${index}`}>{data}</p>) : (data));
            })}
        </HeadingWithContentStyle>
    );
};

export default HeadingWithContent;
