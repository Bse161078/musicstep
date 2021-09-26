import React from "react";
import { Form, Formik } from "formik";

import { InputBox, SelectBox } from "..";
import { SelectWithInputStyle } from "./SelectWithInput.style";
import { SearchIcon } from "../../assets";

const SelectWithInput = () => {
  return (
    <SelectWithInputStyle>
      <Formik initialValues={{ location: "", search: "" }} onSubmit={() => {}}>
        {() => (
          <Form className="search-form-wrapper">
            <span className="select-wrapper">
              <SelectBox name="location" options={[{ key: "", value: "" }]} />
            </span>

            <span className="input-wrapper">
              <InputBox name="search" />
            </span>

            <span className="search-button">
              <SearchIcon />
            </span>
          </Form>
        )}
      </Formik>
    </SelectWithInputStyle>
  );
};

export default SelectWithInput;
