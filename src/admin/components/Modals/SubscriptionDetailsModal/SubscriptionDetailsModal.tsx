import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";
import { SubscriptionDetailsModalStyle } from "./SubscriptionDetailsModal.style";
import { Link } from "react-router-dom";

type SubscriptionDetailsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  handleCancelClick?: any;
  handleChangeClick?: any;
  subscribtion?:any;
};

const SubscriptionDetailsModal = (props: SubscriptionDetailsModalProps) => {
  const {
    isModalVisible,
    setIsModalVisible,
    handleCancelClick,
    handleChangeClick,
    subscribtion
  } = props;
  return (
    <ModalWrapper
      heading="Subscribtion Details"
      width="617px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={
        <Link to="/pricing">
          <FilledButtonStyle height="54px" width="557px">
            Buy More Credits
          </FilledButtonStyle>
        </Link>
      }
    >
      <SubscriptionDetailsModalStyle>
        <div className="detail-wrapper">
          <span className="title-wrapper">
            <h1 className="heading">
              MUSIC <span>{subscribtion.name}</span>
            </h1>
          </span>
          <p className="credits">Credits: 48</p>
          <div className="event-per-months-wraper">
            <p>Events Per Month: 3-4</p>
            <p>(Approximately)</p>
          </div>
          <h1>Price: $99</h1>
        </div>
        <div className="button-wrapper">
          <OutlineButtonStyle
            onClick={handleCancelClick}
            width="245px"
            height="60px"
          >
            Cancel Subscription
          </OutlineButtonStyle>
          <OutlineButtonStyle
            onClick={handleChangeClick}
            width="245px"
            height="60px"
          >
            Change Subscription
          </OutlineButtonStyle>
        </div>
      </SubscriptionDetailsModalStyle>
    </ModalWrapper>
  );
};
export default SubscriptionDetailsModal;
