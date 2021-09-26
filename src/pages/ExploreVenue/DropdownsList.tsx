import { Form, Formik } from "formik";
import React from "react";
import { SelectBox } from "../../components";

import { DropdownsListStyle } from "./ExploreVenue.style";

export const DropdownsList = () => {
  return (
    <DropdownsListStyle>
      <Formik
        initialValues={{
          categoriesType: "All Categories",
          genre: "Genres",
          distance: "distance",
          time: "Timeframe",
          amenities: "Amenities",
        }}
        onSubmit={() => {}}
      >
        {(values: any, setFieldValue: any) => (
          <Form className="drodown-form-wrapper">
            <SelectBox
              name="categoriesType"
              setFieldValue={setFieldValue}
              options={[{ key: "", value: "" }]}
            />
            <SelectBox
              name="genre"
              setFieldValue={setFieldValue}
              options={[{ key: "", value: "" }]}
            />
            <SelectBox
              name="distance"
              setFieldValue={setFieldValue}
              options={[{ key: "", value: "" }]}
            />
            <SelectBox
              name="time"
              setFieldValue={setFieldValue}
              options={[{ key: "", value: "" }]}
            />
            <SelectBox
              name="amenities"
              setFieldValue={setFieldValue}
              options={[{ key: "", value: "" }]}
            />
          </Form>
        )}
      </Formik>
    </DropdownsListStyle>
  );
};
