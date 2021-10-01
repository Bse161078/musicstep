import styled from "styled-components";

export const TeamManagementStyle = styled.main`
  padding-bottom: 80px;

  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 90vw;
      display: grid;
    }
  }
`;
