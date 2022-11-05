import styled from 'styled-components'

type TicketInfoCardStyleProps = {
  disableTicketsAvailbilty: boolean
}
const TicketInfoCardStyle = styled.div<TicketInfoCardStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7f7f7;
  border-radius: 32px;
  gap: 25px;
  max-width: 280px;
  padding: 20px;
  text-align: center;
  max-height:400px;

  .credits {
    color: #ff33cc;
    font-size: 30px;
    font-weight: bold;
  }

  .tickets {
    color: #0c0c0c;
    font-size: 25px;
    font-weight: 500;
  }

  .description {
    color: #373737;
    font-size: ${(props) => (props.disableTicketsAvailbilty ? '13px' : '16px')};
    opacity: 1;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 07px;
  }
`

export default TicketInfoCardStyle
