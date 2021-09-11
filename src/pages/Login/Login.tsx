import React from "react"

import { FormWrapper, LoginForm } from "../../components"
import { LoginStyle } from "./Login.style"

export default function Login() {
    return (
        <LoginStyle>
            <FormWrapper>
                <LoginForm />
            </FormWrapper>
        </LoginStyle>
    )
}