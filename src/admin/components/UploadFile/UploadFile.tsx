import React from "react";

import { UploadFileStyle } from "./UploadFile.style";

type UploadFileProps = {
  buttonType?: string;

};

const UploadFile = (props: UploadFileProps) => {
  return (

    <UploadFileStyle>
      {props.buttonType === "large" ? (
        <img src="/images/group69.svg" alt="drag drop" />
      ) : (
        <img
          src="/images/icons/drag-drop-icon.svg"
          alt="drag drop"
          height="245px"
        />
      )}
    </UploadFileStyle>
    
  );
};
export default UploadFile;
