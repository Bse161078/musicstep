import React from "react"
import { storiesOf } from "@storybook/react"
import InviteModal from "./InviteModal"

storiesOf("Invite Modal", module)
    .add("Modal",()=>{
        return (
            <InviteModal />
        )
    })