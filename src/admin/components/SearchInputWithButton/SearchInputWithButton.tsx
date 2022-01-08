import React from "react";
import { Form, Formik } from "formik";

import { SearchIcon } from "../../../assets";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { SearchInputWithButtonStyle } from "./SearchInputWithButton.style";

type SearchInputWithButtonProps = {
  handleButtonClick?: any;
  buttonTitle?: string;
};
const SearchInputWithButton = (props: SearchInputWithButtonProps) => {
  const { handleButtonClick, buttonTitle } = props;

  const handleSearchSubmit = () => {};

  return (
    <SearchInputWithButtonStyle>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={handleSearchSubmit}
      >
        {() => (
          <Form className="search-wrapper">
            <InputBox name="search" placeholder='Search' />

            <SearchIcon />
          </Form>
        )}
      </Formik>

      {buttonTitle && (
        <FilledButtonStyle
          buttonType="dark"
          width="150px"
          height="60px"
          onClick={handleButtonClick}
        >
          {buttonTitle}
        </FilledButtonStyle>
      )}
    </SearchInputWithButtonStyle>
  );
};

export default SearchInputWithButton;
