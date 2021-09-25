import React from "react";
import { LeftChevronIcon } from "../../assets";

import { HeadingWithContentStyle } from "./HeadingWithContent.style";

type HeadingWithContentProps = {
  heading: string;
  content: string[];
  handleButtonClick: any;
};

const HeadingWithContent = (props: HeadingWithContentProps) => {
  const { heading, content, handleButtonClick } = props;

  return (
    <HeadingWithContentStyle>
      <div className="button-wrapper" onClick={handleButtonClick}>
        <LeftChevronIcon /> Back To Previous Page
      </div>

      <h2 className="heading">{heading}</h2>

      {content.map((data: string, index: number) => {
        return (
          <p className="description" key={`description-${index}`}>
            {data}
          </p>
        );
      })}
    </HeadingWithContentStyle>
  );
};

export default HeadingWithContent;
