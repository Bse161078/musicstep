import React from "react";

import { UploadFileStyle } from "./UploadFile.style";

type UploadFileProps = {
  buttonType?: string;
};

const UploadFile = (props: UploadFileProps) => {
  return (
    <UploadFileStyle
      src={
        props.buttonType === "large"
          ? "/images/group69.svg"
          : "/images/icons/drag-drop-icon.svg"
      }
      alt="drag drop"
    />
  );
};
export default UploadFile;
