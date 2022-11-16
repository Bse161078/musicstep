import styled from 'styled-components';

type CreateTicketProps = {
    tickets?: any;
};

export const CreateTicketStyle = styled.div<CreateTicketProps>`
  display: flex;
  flex-direction: column;
  justify-content:center;
  background:#FFEAFA;
  max-width: 280px;
  min-width:250px;
  height:${(props) => (props.tickets && (props.tickets).length > 0 ? "400px" : "200px")};
  max-height:${(props) => (props.tickets && (props.tickets).length > 0 ? "400px" : "200px")};
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