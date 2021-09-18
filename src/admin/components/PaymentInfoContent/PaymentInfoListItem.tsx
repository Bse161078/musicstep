import React from "react";
import { CalenderIcon, DeleteIcon } from "../../../assets";

import { PaymentInfoListItemStyle } from "./PaymentInfoContent.style";

type PaymentInfoListItemProps = {
  setCurrentPage: (data: string) => void;
};

export const PaymentInfoListItem = (props: PaymentInfoListItemProps) => {
  const { setCurrentPage } = props;
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

        <span onClick={() => setCurrentPage("payment-method")}>
          <CalenderIcon />
        </span>
      </div>
    </PaymentInfoListItemStyle>
  );
};
