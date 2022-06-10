import { Form, Formik } from "formik";
import React from "react";
import { SelectBox } from "../../components";

import { DropdownsListStyle } from "./ExploreVenue.style";

export const DropdownsList = (props:any) => {
  const {filter,setVenues,setLoading} = props
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
            <span >
              <SelectBox
                name="categoriesType"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.categories }]}
                values={filter?.categories}
                setVenues={setVenues}
                setLoading={setLoading}
              />
            </span>
           <span>
              <SelectBox
                name="genre"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.liveStream }]}
                values={filter?.liveStream}
                setVenues={setVenues}
                setLoading={setLoading}
              />
            </span>
           <span>
              <SelectBox
                name="distance"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.distance }]}
                values={filter?.distance}
                setVenues={setVenues}
                setLoading={setLoading}
              />
            </span>
           <span>
              <SelectBox
                name="time"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.timeFrame }]}
                values={filter?.timeFrame}
                setVenues={setVenues}
                setLoading={setLoading}
              />
            </span>

            <span >
              <SelectBox
                name="amenities"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.amenities }]}
                values={filter?.amenities}
                setVenues={setVenues}
                setLoading={setLoading}
              />
            </span>
          </Form>
        )}
      </Formik>
    </DropdownsListStyle>
  );
};
