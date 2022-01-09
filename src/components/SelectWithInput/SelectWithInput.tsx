import React from "react";
import { Form, Formik } from "formik";

import { InputBox, SelectBox } from "..";
import { SelectWithInputStyle } from "./SelectWithInput.style";
import { SearchIcon } from "../../assets";

const SelectWithInput = ({placeholder}: any) => {
  return (
    <SelectWithInputStyle>
      <Formik
        initialValues={{
          location: (
            <>
              <img src="/images/icons/location-icon.svg" alt="location" /> South
              Miami, FL, USA
            </>
          ),
          search: "",
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form className="search-form-wrapper">
            <span className="select-wrapper">
              <SelectBox name="location" options={[{ key: "", value: "" }]} />
            </span>

            <span className="input-wrapper">
              <InputBox name="search" placeholder={placeholder} />
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
