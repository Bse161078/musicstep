import styled from "styled-components";

export const TaxpayerInfoStepsStyle = styled.div`
  .steps-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  }
  .ant-steps-item-content {
    @media (max-width: 1024px) {
      width: 100%;

      .ant-steps-item-title {
        font-size: 8px;
        left: 5px;
      }
    }
  }

  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    grid-column-gap: 20px;
  }
`;
