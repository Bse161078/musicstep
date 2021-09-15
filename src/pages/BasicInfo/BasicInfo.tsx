import React from "react";
import { BasicInfoStyle } from "./BasicInfo.style";
import 'antd/dist/antd.css'
import {Divider} from 'antd'

const BasicInfo = () => {
    return(
        <BasicInfoStyle>
             <h1 className="basicInfo-title">Basic Info</h1>
             <Divider />
        </BasicInfoStyle>
    )
}

export default BasicInfo