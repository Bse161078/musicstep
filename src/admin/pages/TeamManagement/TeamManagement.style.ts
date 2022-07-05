import styled from "styled-components";

export const TeamManagementStyle = styled.main`
  padding-bottom: 80px;
  z-index:1;
  background:white;
  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 90vw;
      display: grid;
    }
  }
`;
