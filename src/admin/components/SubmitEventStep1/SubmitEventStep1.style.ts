import styled from "styled-components";

export const SubmitEventStep1Style = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap:30px;
  }

  .inputs-wrapper {
    display: grid;
    grid-template-columns: 1.7fr 0.7fr 0.7fr 0.7fr;
    gap:30px;    
  }

  .dropdown-row-wrapper  {
    display:grid;
    width: 70%;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    gap:30px;
    
    .error-message {
      color: #dc3545;
    }
  }

  .thirdrow-wrapper {
    display: grid;
    grid-template-columns: 1.5fr 0.3fr 1.5fr;
    gap:30px;
    max-width:1330px;


  }

   .fourth-row-wrapper {
     width: 100%;
   }

  .addvenue-btn {
    margin-top: 30px;
  }
  .error-message {
    color: #dc3545;
  }
`;
