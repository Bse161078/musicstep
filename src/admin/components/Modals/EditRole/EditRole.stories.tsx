import React from "react"
import { storiesOf } from "@storybook/react"
import EditRole from "./EditRole"
import "antd/dist/antd.css";

storiesOf("EditRole Modal", module)
    .add("Modal",()=>{
        return (
            <EditRole />
        )
    })