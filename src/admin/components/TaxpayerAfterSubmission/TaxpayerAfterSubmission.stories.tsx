import React from "react"
import { storiesOf } from "@storybook/react"
import  TaxpayerAfterSubmission  from './TaxPayerAfterSubmisson'

storiesOf("taxpayer as", module)
    .add("Modal",()=>{
        return (
            <TaxpayerAfterSubmission handleEditClick={()=>{}} />
        )
    })