import React from "react"
import { storiesOf } from "@storybook/react"
import AddRole from "./AddRole"
import "antd/dist/antd.css";

storiesOf("AddRole Modal", module)
    .add("Modal",()=>{
        return (
            <AddRole />
        )
    })