import React from "react"
import { storiesOf } from "@storybook/react"
import  TaxpayerAfterSubmission  from './TaxPayerAfterSubmisson'
import "antd/dist/antd.css";

storiesOf("taxpayer as", module)
    .add("Modal",()=>{
        return (
            <TaxpayerAfterSubmission handleEditClick={()=>{}} />
        )
    })