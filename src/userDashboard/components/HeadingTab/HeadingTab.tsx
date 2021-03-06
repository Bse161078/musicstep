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
      <div className="heading-wrapper" style={{marginTop:15}}>
        {icon && <span>{icon}</span>}
        <div>
          {heading && <h4 className="title">{heading}</h4>}
          {description && <p className="description">{description}</p>}
        </div>
      </div>

      {count ? <span className="count">{count}</span> :count===0?0: <ChevronFilledIcon />}
    </HeadingTabStyle>
  );
};

export default HeadingTab;
