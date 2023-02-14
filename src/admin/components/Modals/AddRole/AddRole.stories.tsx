import React from "react"
import { storiesOf } from "@storybook/react"
import AddRole from "./AddRole"

storiesOf("AddRole Modal", module)
    .add("Modal",()=>{
        return (
            <AddRole />
        )
    })