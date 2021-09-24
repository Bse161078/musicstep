import React from "react";

import { SafetySheildIcon, StarIcon } from "../../assets";
import { VenueCardStyle } from "./VenueCard.style";

const VenueCard = () => {
  return (
    <VenueCardStyle>
      <img
        className="venue-thumbnail"
        src="/images/explore-venue/image1.png"
        alt="venue thumb"
      />

      <div className="venue-details">
        <h3 className="top-heading">DOLORES POUROS</h3>
        <h4 className="heading">Franklin Kub's Concert</h4>
        <p className="address">752 Crona Curve, Schowalterborough</p>

        <div className="star-wrapper">
          <StarIcon /> 4.7 <span>(2022 Reviews)</span>
        </div>

        <div className="guidelines-wrapper">
          <SafetySheildIcon /> Safety Guidelines
        </div>
      </div>

      <p className="venue-description">
        Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus
        molestias fugiat et. Ut deserunt provident ab id numquam quo laborum.
        Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita
        molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem
        deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur
        quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor.
        Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga.
      </p>
    </VenueCardStyle>
  );
};

export default VenueCard;
