import React from "react"
import { storiesOf } from "@storybook/react"
import InviteModal from "./InviteModal"
import "antd/dist/antd.css";

storiesOf("Invite Modal", module)
    .add("Modal",()=>{
        return (
            <InviteModal />
        )
    })