import React from "react";
import { CongratulationsModalStyle } from "./Congratulations.styles";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { FilledButtonStyle } from "../../styles/Common.style";
type CongratulationsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  message: string;
  handleButtonClick?: any;
};

const CongratulationsModal = (props: CongratulationsModalProps) => {
  const {
    isModalVisible,
    setIsModalVisible,
    message,
    handleButtonClick,
  } = props;
  return (
    <ModalWrapper
      isFooter={false}
      heading="Congratulations!"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={
        <FilledButtonStyle buttonType="light" width="500px" height="60px">
          Explore MusicPass
        </FilledButtonStyle>
      }
    >
      <CongratulationsModalStyle>
        <img src="/images/party.svg" alt="party" />
        <p className="description">{message}</p>

        <FilledButtonStyle
          onClick={
            handleButtonClick
              ? handleButtonClick
              : () => setIsModalVisible(false)
          }
          buttonType="light"
          width="100%"
          height="60px"
        >
          Explore MusicPass
        </FilledButtonStyle>
      </CongratulationsModalStyle>
    </ModalWrapper>
  );
};
export default CongratulationsModal;
