import styled from "styled-components";

export const ReservationConfirmedModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .qrcode-img {
    width: 208px;
    height: 208px;
    margin: auto;
  }
  .form-wrapper {
    display: grid;
    grid-template-columns: 450px 70px;
    width: 557px;
    gap: 10px;
    align-items: self-end;
    padding-bottom: 20px;
  }
  .or p {
    font-size: 20px;
    font-weight: 300;
  }
  .border-div {
    border-top: 1px solid #0000004D;
  }
  .time-wrapper {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
