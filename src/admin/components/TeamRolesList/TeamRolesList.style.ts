import styled from "styled-components";
import { TableHeaderStyle, TableRowStyle } from "../../../styles/Common.style";

export const TeamRolesListStyle = styled.div`
  margin-top: 30px;

  .table-header {
    ${TableHeaderStyle};

    display: grid;
    grid-template-columns: 180px 1fr 1fr 106px;
  }
`;

export const TeamRoleListItemStyle = styled.div`
  ${TableRowStyle};

  display: grid;
  grid-template-columns: 180px 1fr 1fr 106px;
  align-items: center;
  margin-top: 10px;

  .team-role {
    color: #0c0c0c;
    font-size: 20px;
  }
`;
