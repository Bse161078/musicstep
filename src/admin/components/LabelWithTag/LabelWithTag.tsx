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
            <img src="/images/Recomended.svg" />
          ) : tagType === "none" ? (
            <img src="" />
          ) : (
            <img src="/images/Required.svg" />
          )}
        </div>
        <div>{description}</div>
      </LabelWithTagStyle>
    </>
  );
};
export default LabelWithTag;
