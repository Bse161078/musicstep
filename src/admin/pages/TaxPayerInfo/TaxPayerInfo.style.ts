import styled from "styled-components";

export const TaxPayerInfoStyle = styled.main`
  padding-bottom: 80px;
  z-index:1;
  background:white;

  .ant-steps-item-content {
    @media (max-width: 1024px) {
      width: 100%;

      .ant-steps-item-title {
        font-size: 8px;
        left: 5px;
      }
    }
  }
`;
