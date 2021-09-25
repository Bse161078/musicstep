import react from "react";
import { CongratulationsModalStyle } from "./Congratulations.styles";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { FilledButtonStyle } from "../../styles/Common.style";
type CongratulationsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const CongratulationsModal = (props: CongratulationsModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Congratulations!"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={  <FilledButtonStyle buttonType="light" width="500px" height="60px">Explore MusicPass</FilledButtonStyle>}
    >
      <CongratulationsModalStyle>
      <img src="/images/party.svg"  alt="party"/>
      <p>You are now a member of MusicPass.</p>
      </CongratulationsModalStyle>
    </ModalWrapper>
  );
};
export default CongratulationsModal;
