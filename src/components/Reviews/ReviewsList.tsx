import React from "react";
import { StarIcon } from "../../assets";
import { ReviewsListStyle } from "./Reviews.style";
import { Rating } from "react-simple-star-rating";
import moment from "moment";

const ReviewsList = ({ review }: any) => {
  // let rating=  ;
  // rating=parseInt( rating);
    let username="";
    if(review && review.userInfo && (review.userInfo).length>0){
      username+=review.userInfo[0].firstName;
      if(review.userInfo[0].lastName && (review.userInfo[0].firstName).length>0){
          username+=" "+(review.userInfo[0].lastName)[0].toUpperCase();

      }
    }
  return (
    <ReviewsListStyle>
      <div className="head-wrapper">
        <span className="heading-date-wrapper">
          <h3>
            {username}
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
