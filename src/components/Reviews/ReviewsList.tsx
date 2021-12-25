import React from "react";
import { ReviewsListStyle } from "./Reviews.style";

const ReviewsList = () => {
  return (
    <ReviewsListStyle>
      <div className="head-wrapper">
        <span className="heading-date-wrapper">
          <h3>Frederick Pacocha</h3>
          <p>3 Days Ago</p>
        </span>
        <span>
          <h3>Rating: 2.3</h3>
        </span>
      </div>
      <div>
        <p className="description">
          Earum Dolorem Eius Et Corrupti Fugit Expedita. Facilis Expedita
          Voluptatibus. Possimus Repudiandae Delectus. Excepturi Ipsum Iure
          Saepe Ipsa Voluptatibus Corrupti. Sit Quis Saepe Ducimus Rerum. Aut
          Rem Odio Voluptatem Et Itaque Et Tempora.
        </p>
      </div>
    </ReviewsListStyle>
  );
};
export default ReviewsList;
