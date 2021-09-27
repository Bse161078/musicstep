import react from "react";
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
  const TableRows = () => {
    return (
      <div className="rows">
        <div>
          <span>
            <h1>10:51 AM</h1>
            <p>July 24, 2021</p>
          </span>
          <span>
            <h1>Franklin Kub's Concert</h1>
            <p>Venue Name Here</p>
          </span>
        </div>
        <span>
          <h1>9 Credits</h1>
        </span>
      </div>
    );
  };
  return (
    <ModalWrapper
      heading="Credits History"
      isModalVisible={isModalVisible}
      isFooter={false}
      width="920px"
      setIsModalVisible={setIsModalVisible}
    >
      <CreditHistoryModalStyle>
        <TableHeader />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
        <TableRows />
      </CreditHistoryModalStyle>
    </ModalWrapper>
  );
};

export default CreditHistoryModal;
