import React from "react";
import { ChevronFilledIcon } from "../../../assets";

import { HeadingTabStyle } from "./HeadingTab.style";

type HeadingTabProps = {
  icon?: React.ReactNode;
  heading: string;
  description?: string;
  count?: number;
};

const HeadingTab = (props: HeadingTabProps) => {
  const { icon, heading, description, count } = props;

  return (
    <HeadingTabStyle>
      <div className="heading-wrapper">
        {icon && <span>icon</span>}
        <div>
          {heading && <h4 className="title">{heading}</h4>}
          {description && <p className="description">Expires in 21 days.</p>}
        </div>
      </div>

      {count ? <span className="count">{count}</span> : <ChevronFilledIcon />}
    </HeadingTabStyle>
  );
};

export default HeadingTab;
