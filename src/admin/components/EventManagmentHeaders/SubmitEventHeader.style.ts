import styled from "styled-components";

const SubmitEventStep1HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 30px 0;
  border-bottom: 1px solid #c0c0c0;
  margin-bottom: 30px;
  gap: 30px;

  .prev-text {
    cursor: pointer;
  }
  .header {
    font-size: 48px;
  }

  .heading-button-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .next-step-button {
    margin-top: 3px;
  }
`;

const SubmitEventStep2HeaderStyle = styled.div``;

export { SubmitEventStep1HeaderStyle, SubmitEventStep2HeaderStyle };
