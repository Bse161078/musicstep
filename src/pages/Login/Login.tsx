import React from "react"

import { FormWrapper, LoginForm } from "../../components"
import { LoginStyle } from "./Login.style"

export default function Login() {
    return (
        <LoginStyle>
            <img className="side-image" src="/images/login/login-side.png" alt="login side" />
            <FormWrapper>
                <LoginForm />
            </FormWrapper>
        </LoginStyle>
    )
}