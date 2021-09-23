import React from "react"
import { SectionHeadingStyle } from "./SectionHeading.style";

type SectionHeadingProps = {
    heading: string;
    children: any;
}

const SectionHeading = (props: SectionHeadingProps) => {
    const { heading, children } = props;

    return (
        <SectionHeadingStyle>
            <h3 className="section-heading">{heading}</h3>

            <div>
                {children}
            </div>
        </SectionHeadingStyle>
    )
}

export default SectionHeading; 