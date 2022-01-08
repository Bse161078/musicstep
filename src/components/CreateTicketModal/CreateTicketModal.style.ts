import styled from 'styled-components'

const CreateTicketModalStyle = styled.div`
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    padding: 30px 0px;
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
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    .secondrow-leftsection {
      display: flex;
      gap: 20px;
    }
  }
  .bottom-text {
    font-size: 14px;
    color: #ccc;
  }
  .price-holder {
    width: 260px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    padding: 10px;
    background: #f7f7f7;
    height: 116px;
    border-radius: 16px;
    .title {
      font-size: 20px;
    }
    .right-section {
      border-left: 1px solid #c0c0c0;
      padding: 9px;
    }
    .retail-price {
      border-bottom: 1px solid #c0c0c0;
    }
  }
`
export default CreateTicketModalStyle
