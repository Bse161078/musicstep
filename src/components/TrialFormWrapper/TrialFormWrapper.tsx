import React from "react"

import { TrialFormWrapperStyle } from "./TrialFormWrapper.style";

type TrialFormWrapperProps = {
    children?: any;
}

const TrialFormWrapper = (props: TrialFormWrapperProps) => {
    const { children } = props;

    return (
        <TrialFormWrapperStyle>
            <h3 className="trial-heading">Your Trial Includes</h3>
            {children}
        </TrialFormWrapperStyle>
    )
}

export default TrialFormWrapper;