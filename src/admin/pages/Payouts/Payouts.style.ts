import styled from "styled-components";

export const PayoutsStyle = styled.main`
  padding-bottom: 80px;

  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 90vw;
      display: grid;
    }
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-gap: 30px;

    .dropdowns-form {
      display: flex;
      grid-gap: 30px;
      flex-wrap: wrap;
    }
  }
`;
