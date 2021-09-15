import React from "react"

import { TrialFormWrapperStyle } from "./TrialFormWrapper.style";

type TrialFormWrapperProps = {
    children?: any;
    heading?: string;
}

const TrialFormWrapper = (props: TrialFormWrapperProps) => {
    const { heading, children } = props;

    return (
        <TrialFormWrapperStyle>
            <h3 className="trial-heading">{heading}</h3>
            {children}
        </TrialFormWrapperStyle>
    )
}

export default TrialFormWrapper;