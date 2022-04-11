import styled from "styled-components";

export const CardWithContentStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background: #f7f7f7;
  grid-gap: 20px;
  border-radius: 32px;
  padding: 10px;


  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: end;
    grid-gap: 20px;

    @media (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }

  .heading {
    color: #0c0c0c;
    font-size: 20px;
  }

  .description,
  content {
    color: #0c0c0c;
    font-size: 16px;
    opacity: 0.5;
  }

  .content {
    margin-top: 20px;
  }

  .view-guest-list-text{
    font-size: 16px;
    cursor: pointer;
    color:#100840;
  }
  .cancel-text{
    font-size: 16px;
  }
`;
