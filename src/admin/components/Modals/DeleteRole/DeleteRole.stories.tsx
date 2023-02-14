import React from "react"
import { storiesOf } from "@storybook/react"
import { DeleteRoleModal } from ".";

storiesOf("DeleteRole Modal", module)
    .add("Modal",()=>{
        return (
            <DeleteRoleModal />
        )
    })