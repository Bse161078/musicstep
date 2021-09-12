import React from "react"
import { StartTrialWrapper, TrialForm } from "../../components"
import { FreeTrialStyle } from "./FreeTrial.style"

export default function FreeTrial() {
    return (
        <FreeTrialStyle>
            <StartTrialWrapper>
                <TrialForm />
            </StartTrialWrapper>
        </FreeTrialStyle>
    )
}