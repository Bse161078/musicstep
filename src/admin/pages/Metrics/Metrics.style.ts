import { rgba } from "polished";
import styled from "styled-components";

export const MetricsStyle = styled.main`
  padding-bottom: 80px;
  z-index:100%;
  z-index:1;
  background:white;

  .tiles-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-right:10px;
    padding: 20px 0px;
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
      max-width: 470px;
      width: 100%;
    }
  }
`;
