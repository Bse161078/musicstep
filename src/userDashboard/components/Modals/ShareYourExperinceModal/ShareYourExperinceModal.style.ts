import styled from 'styled-components'

const ShareYourExperinceModalStyle = styled.div`

  .first-row-wrapper {
    display: flex;
    gap: 20px;
    font-weight: normal;
  }

  .description-wrapper {

    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
    height: 187px;

    .concert-name{

      h3 {
        font-size: 16px;
        font-weight: bold;
      }

      p {
        font-size: 12px;
      }

    }
    .description {
      font-size: 12px;
    }

    .date-time {
      font-weight: 600;
      font-size: 16px;
    }

    .organizedBy-text {
      color: #100840;

       .link {
         text-decoration: underline;
         cursor: pointer;
       }

    }
  }
  
    .form-wrapper{
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #ccc;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .stars {
      display: flex;
    }

`

export default ShareYourExperinceModalStyle
