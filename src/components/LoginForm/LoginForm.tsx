import React, { Fragment } from "react"
import { Form, Formik } from "formik"

import { LoginFormStyle } from "./LoginForm.style"
import { FilledButtonStyle } from "../../styles/Common.style"
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
                    <Form>
                        <InputBox name="userName" />
                            <InputBox name="password" />
                            <InputCheckbox name=""
                                onClick={() => { }}
                                className=""
                                isCorrectOption={false}
                            />

                        <FilledButtonStyle>Login</FilledButtonStyle>
                    </Form>
                )}
            </Formik>

            <p>Not a member yet?</p>
            <FilledButtonStyle>Try For Free</FilledButtonStyle>

            <a>Partner Dashboard Login</a>
        </LoginFormStyle>
    )
}

export default LoginForm;