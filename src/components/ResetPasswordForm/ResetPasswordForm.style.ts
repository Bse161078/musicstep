import { rgba } from "polished";
import styled from "styled-components";

export const ResetPasswordFormStyle = styled.div`
  .form-wrapper {
    display: grid;
    grid-gap: 30px;
    padding-bottom: 50px;
    border-bottom: 1px solid ${rgba("#0c0c0c", 0.5)};
    margin-bottom: 50px;
    border-radius: 0;
  }

  .description {
    font-size: 20px;
    margin-bottom: 30px;
    color: #0c0c0c;
  }

  .form-footer {
    p {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #0c0c0c;
      margin-bottom: 10px;
    }
  }
`;
