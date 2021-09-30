import styled from "styled-components";
import { TableHeaderStyle, TableRowStyle } from "../../../styles/Common.style";

export const TeamUsersListStyle = styled.div`
  margin-top: 30px;

  .table-header {
    ${TableHeaderStyle};

    display: grid;
    grid-template-columns: 1fr 1fr 48px;

    @media (max-width: 1024px) {
      grid-template-columns: 1.5fr 1fr 48px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 2.2fr 1fr 48px;
    }
  }
`;

export const TeamUsersListItemStyle = styled.div`
  ${TableRowStyle};

  display: grid;
  grid-template-columns: 1fr 1fr 48px;
  align-items: center;
  margin-top: 10px;

  .team-role {
    color: #0c0c0c;
    font-size: 20px;
  }

  .action-buttons-wrapper {
    cursor: pointer;
  }
`;
