import React from "react"
import { Form, Formik } from "formik"

import { LoginFormStyle } from "./LoginForm.style"
import { FilledButtonStyle, OutlineButtonStyle } from "../../styles/Common.style"
import { loginInitialValues } from "./intialValues"
import { InputBox, InputCheckbox } from ".."

const LoginForm = () => {
    const handleLoginSubmit = () => {
        console.log("Working")
    }
    return (
        <LoginFormStyle>
            <Formik
                enableReinitialize={true}
                initialValues={loginInitialValues}
                onSubmit={handleLoginSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form className="login-form-wrapper">
                        <InputBox label="Username" name="userName" />
                        <InputBox label="Password" name="password" />
                        <InputCheckbox name="remember-password"
                            onClick={() => { }}
                            className=""
                            isCorrectOption={false}
                        />

                        <FilledButtonStyle width="100%" height="60px">Login</FilledButtonStyle>
                    </Form>
                )}
            </Formik>

            <p className="not-a-member">Not a member yet?</p>
            <OutlineButtonStyle width="100%" height="60px">Try For Free</OutlineButtonStyle>

            <a className="partner-login">Partner Dashboard Login</a>
        </LoginFormStyle>
    )
}

export default LoginForm;