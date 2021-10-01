import { rgba } from "polished";
import styled from "styled-components";

export const MetricsStyle = styled.main`
  padding-bottom: 80px;

  .tiles-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 30px 0;
    border-bottom: 1px solid ${rgba("#0c0c0c", 0.5)};
    margin-bottom: 40px;

    @media (max-width: 1280px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .charts-wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;

    @media (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .chart {
      max-width: 440px;
      width: 100%;
    }
  }
`;
