import styled from "styled-components";

export const SubmitEventStep2Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .tickets-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    text-align: left;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    h3 {
      font-size: 24px;
    }
  }
`;
