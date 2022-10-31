import  styled  from 'styled-components';

export const CreateTicketStyle  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  background:#FFEAFA;
  max-width: 280px;
  height: 100%;
  max-height:200px;
  border-radius: 32px;
  align-items:center;
  cursor: pointer;
  
  .create-ticket {
    opacity: 1;
    color: #FF33CC;
    font-weight: Bold;
    font-size: 16px;
    padding:20px;

  }
  .add-icon {
    font-size:100px;
    color: #FF33CC;
    font-weight: 300;
  }
`