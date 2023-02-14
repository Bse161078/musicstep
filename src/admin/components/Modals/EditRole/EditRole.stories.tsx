import React from "react"
import { storiesOf } from "@storybook/react"
import EditRole from "./EditRole"

storiesOf("EditRole Modal", module)
    .add("Modal",()=>{
        return (
            <EditRole />
        )
    })