import { Form, Formik } from "formik";
import React from "react"
import { SearchIcon } from "../../../assets";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { SearchInputWithButtonStyle } from "./SearchInputWithButton.style";

const SearchInputWithButton = () => {
    const handleSearchSubmit = () => {

    }

    return (
        <SearchInputWithButtonStyle>
            <Formik
            initialValues={
                {
                    search: ""
                }
            }
            onSubmit={handleSearchSubmit}
            >
                {()=>(
                    <Form className="search-wrapper">
                        <InputBox name="search" />

                        <SearchIcon />
                    </Form>
                )}
            </Formik>

            <FilledButtonStyle buttonType="dark" width="150px" height="60px">Invite</FilledButtonStyle>
        </SearchInputWithButtonStyle>
    )
}

export default SearchInputWithButton;