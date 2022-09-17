import styled from "styled-components";

const CreateTicketModalStyle = styled.div`
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    padding: 30px 0px;

    label {
      font-size: 14px;
    }
  }

  .first-row {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    gap: 20px;
  }
  .second-row {
    border-top: 1px solid #c0c0c0;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
    .secondrow-leftsection {
      display: flex;
      gap: 20px;
    }
  }

  .bottom-text {
    font-size: 14px;
    color: #ccc;
    font-weight: normal;
    text-align: left;
  }

  .price-holder {
    width: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    background: #f7f7f7;
    border-radius: 16px;

    .title {
      font-size: 20px;
    }

    .right-section {
      border-left: 1px solid #c0c0c0;
      padding: 9px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .price-label {
      font-weight: normal;
      font-size: 12px;
    }

    .retail-price {
      border-bottom: 1px solid #c0c0c0;
      padding: 10px 15px;
    }

    .payout-price {
      padding: 10px 15px;
    }
  }
  .error-message{
    color: #dc3545;
  }
`;
export default CreateTicketModalStyle;
