import React from "react";

import { UploadFileStyle } from "./UploadFile.style";

type UploadFileProps = {
  buttonType?: string;
  handleClick?: (e: any) => void;
  previewProfileImage?: string;
};

const UploadFile = (props: UploadFileProps) => {
  return (
    <UploadFileStyle
      src={
        props.buttonType === "large"
          ? !props.previewProfileImage ||
            props.previewProfileImage?.includes("null") ||
            props.previewProfileImage?.includes("undefined")
            ? "/images/group69.svg"
            : props.previewProfileImage
          : props.previewProfileImage?.includes("null") ||
            props.previewProfileImage?.includes("undefined")
          ? "/images/icons/drag-drop-icon.svg"
          : props.previewProfileImage
      }
      alt="drag drop"
      onClick={props.handleClick}
    />
  );
};
export default UploadFile;
