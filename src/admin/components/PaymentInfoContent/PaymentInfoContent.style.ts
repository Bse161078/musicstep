import styled from "styled-components";
import { TableHeaderStyle, TableRowStyle } from "../../../styles/Common.style";

export const PaymentInfoContentStyle = styled.div`
  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 90vw;
      display: grid;
    }
  }
  
  .filter {
    font-size: 14px;
    font-weight: bold;
    color: #0c0c0c;
    display: flex;
    align-items: center;
    grid-column-gap: 15px;
  }
.button{
  margin-left:30vw;
}
  .table-header {
    ${TableHeaderStyle};

    display: grid;
    grid-template-columns: 2.5fr 1fr 1fr 106px;
    margin-top: 20px;
  }
`;

export const PaymentInfoListItemStyle = styled.div`
  ${TableRowStyle};

  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 106px;
  align-items: center;
  margin-top: 10px;

  .team-role {
    color: #0c0c0c;
    font-size: 20px;
  }
  
  .team-role:hover {
    cursor: pointer;
  }
`;
