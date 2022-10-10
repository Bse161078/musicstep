import React, {useState, useEffect} from "react";
import axios from "axios";
import {Rating} from "react-simple-star-rating";
import {ReviewsStyle} from "./Reviews.style";
import {Formik, Form} from "formik";
import ReviewsList from "./ReviewsList";
import {FilledButtonStyle} from "../../styles/Common.style";
import {InputBox, Loading} from "..";
import * as yup from "yup";
import {useLoginContext} from "../../context/authenticationContext";

const Reviews = (props: any) => {
    const {state} = useLoginContext();
    const {venueId, reviews, getReviews, review_type,getVenue} = props;
    const [rating, setRating] = useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hideForm,setHideForm]=useState(false);
    const handleRating = (rate: number) => {
        setRating(rate);
        // other logic
    };
    const handleSubmit = (values: any, {resetForm}: any) => {
        setIsLoading(true);
        axios
            .post(
                `/v1/review/`,
                {
                    venue: venueId,
                    rating: rating,
                    review: values.review,
                    review_type
                },
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                }
            )
            .then((response) => {
                setHideForm(true);
                setTimeout(()=>{
                    setHideForm(false);
                },500)
                setRating(0);
                getReviews();
                getVenue();
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
            });
    };

    return (
        <ReviewsStyle>
            {isLoading&&<Loading/>}
            {
                !hideForm &&
                <Formik
                    initialValues={{
                        review: "",
                    }}
                    validationSchema={yup.object().shape({
                        review: yup.string().required("Review is require"),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form className="form-wrapper">
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating} /* Available Props */
                        />
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
            }
            <div>
                {reviews &&
                reviews.map((review: any) => <ReviewsList review={review}/>)}
            </div>
        </ReviewsStyle>
    );
};

export default Reviews;
