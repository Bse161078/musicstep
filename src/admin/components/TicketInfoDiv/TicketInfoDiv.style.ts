import styled from "styled-components";

const TicketInfoDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7f7f7;
  border-radius: 32px;
  gap: 25px;
  max-width: 280px;
  padding: 20px;
  text-align: center;

  .credits {
    color: #ff33cc;
    font-size: 30px;
    font-weight: bold;
  }

  .tickets {
    color: #0c0c0c;
    font-size: 16px;
  }

  .description {
    color: #373737;
    font-size: 16px;
    opacity: 0.5;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 07px;
  }
`;

export default TicketInfoDivStyle;
