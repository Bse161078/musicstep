import React from "react";
import LabelWithTagStyle from "./LabelWithTag.style";

type LabelProps = {
  label?: string;
  tagType?: string;
  description?: string;
};
const LabelWithTag = (props: LabelProps) => {
  const { label, tagType, description } = props;
  return (
    <>
      <LabelWithTagStyle>
        <div className="content-wrapper">
          <h2 className="header">{label}</h2>
          {tagType === "Recomended" ? (
            <img src="/images/Recomended.svg" alt="recomended"/>
          ) : tagType === "none" ? (
            <img src="" alt="" />
          ) : (
            <img src="/images/Required.svg" alt='required' />
          )}
        </div>
        <div>{description}</div>
      </LabelWithTagStyle>
    </>
  );
};
export default LabelWithTag;
