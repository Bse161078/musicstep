import React from "react"
import { storiesOf } from "@storybook/react"
import "antd/dist/antd.css";
import { DeleteRoleModal } from ".";

storiesOf("DeleteRole Modal", module)
    .add("Modal",()=>{
        return (
            <DeleteRoleModal />
        )
    })