import { Collapse } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { UpcomingEvents } from "..";

import { SafetySheildIcon, StarIcon } from "../../assets";
import { CollapseStyle, VenueCardStyle } from "./VenueCard.style";

const { Panel } = Collapse;

const VenueCard = ({pageUrl}: any) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(pageUrl)
  }
  return (
    <>
      <VenueCardStyle onClick={handleClick}>
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
          Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo.
          Minus molestias fugiat et. Ut deserunt provident ab id numquam quo
          laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo
          expedita molestiae vel porro. Dicta est earum ab dignissimos sit.
          Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur
          consequatur quae odit deleniti magnam qui quidem. Et distinctio et
          rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque
          suscipit fuga.
        </p>
      </VenueCardStyle>
      <CollapseStyle>
        <Panel header="9 upcoming events" key="1">
          <UpcomingEvents />
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Panel>
      </CollapseStyle>
    </>
  );
};

export default VenueCard;
