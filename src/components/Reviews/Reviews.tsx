import React from "react";
import { ReviewsStyle } from "./Reviews.style";
import { Formik, Form } from "formik";
import ReviewsList from "./ReviewsList";
import { FilledButtonStyle } from "../../styles/Common.style";
import { InputBox } from "..";
const Reviews = () => {
  const handleSubmit = () => {};
  return (
    <ReviewsStyle>
      <Formik
        initialValues={{
          review: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="form-wrapper">
          <InputBox
            name="review"
            label="Post a Review"
            placeholder="Type here..."
            height="90px"
            width="800px"
            radiusType="27px"
          />
          <FilledButtonStyle buttonType="dark" width="290px" height="60px">
            Post Review
          </FilledButtonStyle>
        </Form>
      </Formik>
      <div>
        <ReviewsList />
        <ReviewsList />
        <ReviewsList />
        <ReviewsList />
      </div>
    </ReviewsStyle>
  );
};

export default Reviews;
