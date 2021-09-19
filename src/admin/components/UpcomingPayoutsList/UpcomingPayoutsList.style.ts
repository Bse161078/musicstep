import styled from "styled-components";
import { TableHeaderStyle, TableRowStyle } from "../../../styles/Common.style";

export const UpcomingPayoutsListStyle = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;

  .table-header {
    ${TableHeaderStyle};

    display: grid;
    grid-template-columns: 200px 1fr 75px;
  }
`;

export const UpcomingPayoutsListItemStyle = styled.div`
  ${TableRowStyle};

  display: grid;
  grid-template-columns: 200px 1fr 75px;
  .payout-detail {
    text-align: right;

    .payout-value {
      font-size: 24px;
      font-weight: bold;
      color: #0c0c0c;
    }

    .payout-status {
      opacity: 0.5;
      font-size: 12px;
      font-weight: bold;
      color: #0c0c0c;
    }
  }
`;
