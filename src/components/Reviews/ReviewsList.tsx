import React from "react";
import { StarIcon } from "../../assets";
import { ReviewsListStyle } from "./Reviews.style";
import { Rating } from "react-simple-star-rating";
import moment from "moment";

const ReviewsList = ({ review }: any) => {
  // let rating=  ;
  // rating=parseInt( rating);
  return (
    <ReviewsListStyle>
      <div className="head-wrapper">
        <span className="heading-date-wrapper">
          <h3>
            {review?.userInfo[0]?.firstName + " " + review?.userInfo[0]?.lastName}
          </h3>
          <p>
            {moment(new Date()).diff(moment(review.createdAt), "days")
              ? moment(new Date()).diff(moment(review.createdAt), "days") +
                " Days Ago"
              : "Today"}
          </p>
        </span>
        <span>
          <h3>
            Rating: {(review.rating / 20).toFixed()}
            <Rating
              ratingValue={review.rating}
              readonly /* Available Props */
            />
            {/* {[...Array(review.rating / 20).map((rating) => <StarIcon />)]} */}
          </h3>
        </span>
      </div>
      <div>
        <p className="description">{review.review}</p>
      </div>
    </ReviewsListStyle>
  );
};
export default ReviewsList;
