import React, { useState } from "react";
import { PaymentMethodDetails } from "..";
import { CalenderIcon, DeleteIcon } from "../../../assets";


import { PaymentInfoListItemStyle } from "./PaymentInfoContent.style";

type PaymentInfoListItemProps = {
  setCurrentPage: (data: string) => void;
  payments :any;
};



export const PaymentInfoListItem = (props: PaymentInfoListItemProps) => {
  const { setCurrentPage,payments } = props;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleShowPayment = ()=>{
    console.log("payements",payments)
    payments.length>0&&payments.map((payment:any)=>{
      return(
      <PaymentInfoListItemStyle>
        <div className="content-wrapper">
        <p className="description">{payment.beneficiary_name}</p>
        <h4 className="heading">
         {payment.account_number}
        </h4>
        <p className="description">{payment.currency}</p>
      </div>

      <div className="team-role">{payment.routing_number}</div>

      <div className="team-role">{payment.tax_number}</div>

      <div className="action-buttons-wrapper">
        <DeleteIcon />
        <span onClick={() => setIsModalVisible(true)}>
          <CalenderIcon  />
        </span>
      </div>
      <PaymentMethodDetails setCurrentPage={setCurrentPage} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  />

      </PaymentInfoListItemStyle>
      )
    })
  }
  return (
    payments.length>0&&payments.map((payment:any)=>{
      return(
      <PaymentInfoListItemStyle>
        <div className="content-wrapper">
        <p className="description">{payment.beneficiary_name}</p>
        <h4 className="heading">
         {payment.account_number}
        </h4>
        <p className="description">{payment.currency}</p>
      </div>

      <div className="team-role">{payment.routing_number}</div>

      <div className="team-role">{payment.tax_number}</div>

      <div className="action-buttons-wrapper">
        <DeleteIcon />
        <span onClick={() => setIsModalVisible(true)}>
          {/* <CalenderIcon  /> */}
        </span>
      </div>
      <PaymentMethodDetails setCurrentPage={setCurrentPage} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  />

      </PaymentInfoListItemStyle>
      )
    })
  );
};
