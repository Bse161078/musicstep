import React, { useState } from "react";
import { PaymentMethod, PaymentMethodDetails } from "..";
import { CalenderIcon, DeleteIcon } from "../../../assets";


import { PaymentInfoListItemStyle } from "./PaymentInfoContent.style";

type PaymentInfoListItemProps = {
  setCurrentPage: (data: string) => void;
};

export const PaymentInfoListItem = (props: PaymentInfoListItemProps) => {
  const { setCurrentPage } = props;
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <PaymentInfoListItemStyle>
      <div className="content-wrapper">
        <p className="description">Wells Fargo</p>
        <h4 className="heading">
          Checking Victory for humanity, LLC xxxxxx8721
        </h4>
        <p className="description">U.S. Dollars $, United States</p>
      </div>

      <div className="team-role">Bank</div>

      <div className="team-role">12</div>

      <div className="action-buttons-wrapper">
        <DeleteIcon />
        <span onClick={() => setIsModalVisible(true)}>
          <CalenderIcon  />
        </span>
      </div>
      <PaymentMethodDetails isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  />
    </PaymentInfoListItemStyle>
  );
};
