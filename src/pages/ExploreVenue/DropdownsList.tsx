import { Form, Formik } from "formik";
import React, { useState } from "react";
import { SelectBox } from "../../components";
import { FilledButtonStyle,OutlineButtonStyle } from "../../styles/Common.style";

import { DropdownsListStyle } from "./ExploreVenue.style";

export const DropdownsList = (props:any) => {
  const {filter,setVenues,setLoading,getEvents,getFilters} = props
  const [clear,setClear]=useState(false)
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
        
        onSubmit={(values:any, { resetForm }) => {
          console.log(values,'formikvalues')
          resetForm({values: ""})
      }}
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
                clear={clear}
                setLoading={setLoading}
              />
            </span>
           <span>
              <SelectBox
                name="genre"
                setFieldValue={setFieldValue}
                clear={clear}
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
                clear={clear}
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
                clear={clear}
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
                clear={clear}
                setLoading={setLoading}
              />
            </span>
            <span>
              <OutlineButtonStyle style={{width:"120%", marginTop:10,border:'white',background:'#F7F7F7'}}
              type="submit"
              onClick={()=>{
                setClear(true)
                getEvents()
                //setFieldValue(name)
                getFilters()
              }}
              >
                Clear All
              </OutlineButtonStyle>
            </span>
          </Form>
          
        )}
        
        
      </Formik>
    </DropdownsListStyle>
  );
};
