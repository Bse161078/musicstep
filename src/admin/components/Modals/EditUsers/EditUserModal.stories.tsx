import React from "react"
import { storiesOf } from "@storybook/react"
import  EditUserModal  from "./EditUserModal";
import "antd/dist/antd.css";

storiesOf("EditUser Modal", module)
    .add("Modal",()=>{
        return (
            <EditUserModal />
        )
    })