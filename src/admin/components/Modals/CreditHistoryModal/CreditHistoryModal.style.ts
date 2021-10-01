import styled from "styled-components";

export const CreditHistoryModalStyle = styled.div`
  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 90vw;
      display: grid;
    }
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #0000004d;
    padding: 0 20px;
    padding-bottom: 10px;

    @media ( max-width: 767px ) {
      justify-content: flex-start;
      grid-gap: 50px;
    }
  }
  .header div {
    display: flex;
    gap: 60px;
  }
`;
