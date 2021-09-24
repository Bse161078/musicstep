import React from "react";
import { SectionWrapperStyle } from "./SectionWrapper.style";

type SectionWrapperProps = {
  type?: "light" | "dark";
  heading: string;
  children: any;
  className?: string;
};

const SectionWrapper = (props: SectionWrapperProps) => {
  const { type, heading, children, className } = props;

  return (
    <SectionWrapperStyle type={type}>
      <h2 className="section-heading">{heading}</h2>

      <div className={className}>{children}</div>
    </SectionWrapperStyle>
  );
};

export default SectionWrapper;
