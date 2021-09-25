import React, { Component } from "react";
import { ModalWrapper } from "../ModalWrapper";
import { PaymentMethodDetailsStyle } from "./PaymentMethodDetails.style";
import { FilledButtonStyle } from "../../../../styles/Common.style";
import { TabsStyle } from "../../../../styles/Fields.style";
import { TabPaneStyle } from "../../../../styles/Fields.style";
import { Drafts } from "../../DraftPaymentDetails";
import { LivePaymentDetails } from "../../LivePaymentDetails";
import PastPaymentDetails from "../../PastPaymentDetails/PastPaymentDetails";

type PaymentMethodDetailsProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const PaymentMethodDetails = (props: PaymentMethodDetailsProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Events Using Well Fargo *****9021"
      button={<FilledButtonStyle width="500px">Okay</FilledButtonStyle>}
      width="920px"
      height="620px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <TabsStyle defaultActiveKey="1">
        <TabPaneStyle tab="Live(0)" key="1">
          <LivePaymentDetails />
        </TabPaneStyle>
        <TabPaneStyle tab="Drafts(0)" key="2">
          <Drafts />
        </TabPaneStyle>
        <TabPaneStyle tab="Past(13)" key="3">
          <PastPaymentDetails />
        </TabPaneStyle>
      </TabsStyle>
    </ModalWrapper>
  );
};
export default PaymentMethodDetails;
