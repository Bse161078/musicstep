import React from "react";
import { BasicInfoStyle } from "./BasicInfo.style";
import 'antd/dist/antd.css'
import {Divider} from 'antd'

const BasicInfo = () => {
    return(
        <BasicInfoStyle>
             <h1 className="basicinfo-title">Basic Info</h1>
        </BasicInfoStyle>
    )
}

export default BasicInfo