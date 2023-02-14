import React from "react"
import { storiesOf } from "@storybook/react"
import  EditUserModal  from "./EditUserModal";

storiesOf("EditUser Modal", module)
    .add("Modal",()=>{
        return (
            <EditUserModal />
        )
    })