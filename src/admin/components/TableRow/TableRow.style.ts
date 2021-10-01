import styled from "styled-components";

export const TableRowStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 60px;
  padding: 10px 0px;
  margin: 0 20px;
  border-bottom: 1px solid #0000004d;
  text-align: left;

  @media ( max-width: 767px ) {
    grid-template-columns: 90px 100px auto;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
  }

  .subheading {
    opacity: 0.5;
    font-size: 14px;
    padding-top: 5px;
    color: #0c0c0c;
  }

  .credits {
    font-size: 24px;
    color: #0c0c0c;
  }
`;
