import React from "react"
import { storiesOf } from "@storybook/react"
import "antd/dist/antd.css";
import { ErrorDialog } from ".";

storiesOf("ErrorDialog Modal", module)
    .add("Modal",()=>{
        return (
            <ErrorDialog />
        )
    })