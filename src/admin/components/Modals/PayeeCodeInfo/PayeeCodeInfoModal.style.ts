import styled from "styled-components";

export const PayeeCodeInfoModalStyle = styled.div`
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
    grid-template-columns: 1fr auto;
    width: 100%;
    gap: 10px;
    align-items: self-end;
    padding-bottom: 20px;

    @media ( max-width: 800px) {
      /* grid-template-columns: 1fr; */
    }
  }
  .or p {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  .border-div {
    border-top: 1px solid #0000004D;
    padding-top: 30px;

    .description {
      font-size: 14px;
      margin-bottom: 30px;

    }
  }
  .time-wrapper {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
