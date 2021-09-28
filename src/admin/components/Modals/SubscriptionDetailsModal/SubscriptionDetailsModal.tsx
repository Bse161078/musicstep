import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";
import { SubscriptionDetailsModalStyle } from "./SubscriptionDetailsModal.style";

type SubscriptionDetailsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const SubscriptionDetailsModal = (props: SubscriptionDetailsModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;

  return (
    <ModalWrapper
      heading="Subscription Details"
      width="617px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={
        <FilledButtonStyle height="54px" width="557px">
          Buy More Credits
        </FilledButtonStyle>
      }
    >
      <SubscriptionDetailsModalStyle>
        <div className="detail-wrapper">
          <span className="title-wrapper">
            <h1 className="heading">
              MUSIC <span>ENTHUSIAST</span>
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
          <OutlineButtonStyle width="245px" height="60px">
            Cancel Subscription
          </OutlineButtonStyle>
          <OutlineButtonStyle width="245px" height="60px">
            Change Subscription
          </OutlineButtonStyle>
        </div>
      </SubscriptionDetailsModalStyle>
    </ModalWrapper>
  );
};
export default SubscriptionDetailsModal;
