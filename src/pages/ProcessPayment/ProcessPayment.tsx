import React from "react"
import { BillingInformation, ProcessPaymentForm } from "../../components"

import { ProcessPaymentStyle } from "./ProcessPayment.style"

export default function ProcessPayment() {
    return (
        <ProcessPaymentStyle>
            <BillingInformation leftHeading="Your Free Trial Offer Includes" />
            
            <ProcessPaymentForm />
        </ProcessPaymentStyle>
    )
}