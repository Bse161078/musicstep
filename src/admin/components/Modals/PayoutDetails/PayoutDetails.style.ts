import styled from "styled-components";

export const PayoutDetailsStyle = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  .left-section {
    gap: 20px;
  }
  .right-section,
  .left-section {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
    
  }
  .payments-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #bottom-top-borders {
    border-bottom: 1px solid rgb(209, 211, 210);
    border-top: 1px solid rgb(209, 211, 210);
    padding: 20px 0px;
  }
  #bottom-border {
    border-bottom: 1px solid rgb(209, 211, 210);
    padding-bottom: 20px;
  }
  .exportfile-wrapper {
    text-align: right;
    padding: 30px 0px;
  }
  .right-section{
        gap: 20px;
  }
`;
