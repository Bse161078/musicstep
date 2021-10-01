import React from "react";
import { TableRow } from "../..";

import { ModalWrapper } from "../ModalWrapper";
import { CreditHistoryModalStyle } from "./CreditHistoryModal.style";

type CreditHistoryModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const CreditHistoryModal = (props: CreditHistoryModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;

  const TableHeader = () => {
    return (
      <div className="header">
        <div>
          <span>Time & Date</span>
          <span>Event & Venue</span>
        </div>
        <span>Credits</span>
      </div>
    );
  };

  return (
    <ModalWrapper
      heading="Credits History"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      isFooter={false}
      width="920px"
    >
      <CreditHistoryModalStyle>
        <div className="table-wrapper">
          <TableHeader />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
          <TableRow rowLabel3="9 Credits" />
        </div>
      </CreditHistoryModalStyle>
    </ModalWrapper>
  );
};

export default CreditHistoryModal;
