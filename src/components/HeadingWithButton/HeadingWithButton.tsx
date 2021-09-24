import React from "react"
import { OutlineButtonStyle } from "../../styles/Common.style";

import { HeadingWithButtonStyle } from "./HeadingWithButton.style";

const HeadingWithButton = () => {
    return (
        <HeadingWithButtonStyle>
            <h2 className="heading">Have You Ever Wished Attending Concerts Was More Affordable?</h2>

            <p className="description"></p>
            <p className="description"></p>

            <OutlineButtonStyle buttonType="dark">Explore Music Events Near Me</OutlineButtonStyle>
        </HeadingWithButtonStyle>
    )
}

export default HeadingWithButton;