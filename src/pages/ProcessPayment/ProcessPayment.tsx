import React from "react"
import { BillingInformation, ProcessPaymentForm } from "../../components"

import { ProcessPaymentStyle } from "./ProcessPayment.style"

export default function ProcessPayment() {
    return (
        <ProcessPaymentStyle>
            <BillingInformation />
            
            <ProcessPaymentForm />
        </ProcessPaymentStyle>
    )
}