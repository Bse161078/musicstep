import React from "react";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { CardWithContentStyle } from "./CardWithContent.style";

const CardWithContent = () => {
  return (
    <CardWithContentStyle>
      <img
        src="/images/sample.png"
        className="card-thumbnail"
        alt="thumbnail"
      />

      <div>
        <div className="row-wrapper">
          <div>
            <h4 className="heading">Franklin Kub's concert</h4>
            <p className="description">Alternative, Classical</p>
          </div>

          <FilledButtonStyle width="100px" height="54px">
            Cancel
          </FilledButtonStyle>
        </div>

        <div className="row-wrapper">
          <div>
            <h4 className="heading">10:51 AM</h4>
            <p className="description">1 Hour</p>
          </div>

          <span className="content">Cancelation Time Left: 22:32:09</span>
        </div>
      </div>
    </CardWithContentStyle>
  );
};

export default CardWithContent;
