import { Page } from "./../../stories/Page";
import styled from "styled-components";

export const ReviewsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
export const ReviewsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 16px;
  font-size: 16px;
  color: #373737;
  margin-top: 20px;
  .head-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .description {
    font-size: 14px;
  }
  .heading-date-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
