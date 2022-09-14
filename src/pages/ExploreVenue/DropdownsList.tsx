import { Form, Formik } from "formik";
import React, { useState } from "react";
import { SelectBox } from "../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";

import { DropdownsListStyle } from "./ExploreVenue.style";

export const DropdownsList = (props: any) => {
  const { filter, setVenues, setLoading, getEvents, getFilters } = props;
  const [clear, setClear] = useState(false);
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
        onSubmit={(values: any, { resetForm }) => {
          resetForm({ values: "" });
        }}
      >
        {(values: any, setFieldValue: any) => (
          <Form className="drodown-form-wrapper">
            <span>
              <SelectBox
                name="categoriesType"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.categories }]}
                values={filter?.categories}
                setVenues={setVenues}
                clear={clear}
                width={"large"}
                setLoading={setLoading}
              />
            </span>
            <span style={{ width: "150px" }}>
              <SelectBox
                name="genre"
                setFieldValue={setFieldValue}
                clear={clear}
                options={[{ key: "", value: filter?.liveStream }]}
                values={filter?.liveStream}
                setVenues={setVenues}
                setLoading={setLoading}
                width={"large"}
              />
            </span>
            <span style={{ width: "150px" }}>
              <SelectBox
                name="distance"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.distance }]}
                values={filter?.distance}
                width={"large"}
                setVenues={setVenues}
                clear={clear}
                setLoading={setLoading}
              />
            </span>
            <span style={{ width: "150px" }}>
              <SelectBox
                name="time"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.timeFrame }]}
                values={filter?.timeFrame}
                setVenues={setVenues}
                clear={clear}
                setLoading={setLoading}
                width={"large"}
              />
            </span>

            <span style={{ width: "150px" }}>
              <SelectBox
                name="amenities"
                setFieldValue={setFieldValue}
                options={[{ key: "", value: filter?.amenities }]}
                values={filter?.amenities}
                setVenues={setVenues}
                width={"large"}
                clear={clear}
                setLoading={setLoading}
              />
            </span>
            <span>
              <OutlineButtonStyle
                style={{
                  width: "120%",
                  marginTop: 10,
                  border: "white",
                  background: "#F7F7F7",
                  padding: "5px",
                }}
                type="submit"
                onClick={() => {
                  setClear(true);
                  getEvents();
                  //setFieldValue(name)
                  getFilters();
                }}
              >
                Clear All
              </OutlineButtonStyle>
            </span>
            <span>
              <FilledButtonStyle
                style={{
                  width: "120%",
                  marginTop: 10,
                  background: "#fff",
                  padding: "5px",
                  color: "#100840",
                  border: "1px solid #100840",
                }}
                type="submit"
              >
                Save filter preferences
              </FilledButtonStyle>
            </span>
          </Form>
        )}
      </Formik>
    </DropdownsListStyle>
  );
};
