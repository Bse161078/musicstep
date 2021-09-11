import { Formik } from "formik";
import React from "react"
import { InputBox, InputCheckbox } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";

import { FormWrapperStyle } from "./FormWrapper.style";

const FormWrapper = ({children}: any) => {
    return (
        <FormWrapperStyle>
            <h1 className="top-heading">Welcome Back!</h1>

            <article className="form-wrapper">
                <h3 className="form-heading">Login To Your Account</h3>

                {children}
            </article>
        </FormWrapperStyle>
    )
}

export default FormWrapper;