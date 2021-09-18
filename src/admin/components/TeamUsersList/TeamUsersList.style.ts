import styled from "styled-components";
import { TableHeaderStyle, TableRowStyle } from "../../../styles/Common.style";

export const TeamUsersListStyle = styled.div`
  margin-top: 30px;

  .table-header {
    ${TableHeaderStyle};

    display: grid;
    grid-template-columns: 1fr 1fr 48px;
  }
`;

export const TeamUsersListItemStyle = styled.div`
  ${TableRowStyle};

  display: grid;
  grid-template-columns: 1fr 1fr 48px;
  align-items: center;
  margin-top: 10px;

  .team-role {
    color: #0C0C0C;
    font-size: 20px;
  }
`;
