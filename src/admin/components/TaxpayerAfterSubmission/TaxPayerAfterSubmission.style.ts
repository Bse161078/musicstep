import { Dispatch } from 'react';
import styled from "styled-components";
export const TaxPayerAfterSubmissionStyle = styled.div`
  display: grid;
  grid-template-columns:12% 76% 12%;
  background: black;
  align-items: flex-start;
  max-width: 553px;
  padding: 20px;
  background: #E8F2FF;
  border-radius: 32px;
  gap:5px;
  .checkbox-heading {
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 4px;
  }

  .checkbox-description {
    font-size: 16px;
    color: #0c0c0c;
  }
`;
