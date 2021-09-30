import React from "react";
import { Link } from "react-router-dom";
import { OutlineButtonStyle } from "../../styles/Common.style";

import { UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = () => {
  return (
    <UpcomingEventsStyle>
      <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>

      <div className="row-wrapper">
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>

        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      </div>
    </UpcomingEventsStyle>
  );
};

export default UpcomingEvents;
