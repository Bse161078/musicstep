import React from "react";

import {UploadFileStyle} from "./UploadFile.style";

type UploadFileProps = {
    buttonType?: string;
    handleClick?: (e: any) => void;
    previewProfileImage?: string;
    width?: string;
    height?: string;
};

const UploadFile = (props: UploadFileProps) => {
    return (
        <UploadFileStyle
            src={
                (!props.previewProfileImage || props.previewProfileImage=="null")? "/images/icons/drag-drop-icon.svg" : props.previewProfileImage
            }
            alt="drag drop"
            width={props.width}
            height={props.height}
            onClick={props.handleClick}
        />
    );
};
export default UploadFile;
