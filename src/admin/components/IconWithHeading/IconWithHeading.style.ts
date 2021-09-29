import styled from "styled-components";

export const IconWithHeadingStyle = styled.div`
  padding: 20px;
  border-radius: 32px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 20px;
  cursor: pointer;

  @media ( max-width: 767px ) {
    width: 100%;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    color: #0c0c0c;
  }
`;
