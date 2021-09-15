import styled from "styled-components";

export const TrialSetPasswordStyle = styled.article`
  .set-password-wrapper {
    display: grid;
    grid-gap: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 30px;

    .password-wrapper-heading {
      color: #0c0c0c;
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
  }

  .info-details {
    opacity: 0.7;
    font-size: 14px;
    color: #0c0c0c;
    text-align: center;
    margin-bottom: 25px;
  }

  .info-footer-heading {
    color: #0c0c0c;
    text-align: center;
    font-size: 20px;

    span {
      color: #1981fc;
    }
  }
`;
