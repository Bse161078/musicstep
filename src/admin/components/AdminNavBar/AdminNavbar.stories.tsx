import React from "react"
import { storiesOf } from "@storybook/react"
import { AdminNavBar } from ".."

storiesOf("AdminNavbar", module)
    .add("Normal",()=>{
        return (
            <AdminNavBar />
        )
    })