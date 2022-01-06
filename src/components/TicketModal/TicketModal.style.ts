import styled from 'styled-components'

const TicketModalStyle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items:center;
justify-content:center;
.text-wrapper {
    background: #F7F7F7;
    border-radius: 27px;
}
.text-wrapper > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    
}
.first-wrapper,.second-wrapper {
        border-top: 2px solid #CCC;s
}
.credit-text {
    color:#FF33CC;
    font-size: 40px;
}
  #event-name {
     font-size: 24px;
     font-weight: 800;
     margin-left: 0px;
  }
  #below-eventname {
     font-size:19px;
     opacity: 0.5;
     margin-bottom: 20px;
  }
  #location-text{    
    display: flex;
    flex-direction: column;
    gap: 20px;
     font-size: 16px;
     font-weight: 500;
     margin-bottom: 20px;
  }
  #event-datetime {
     font-size: 24px;
     font-weight: 500;
 
  }
`

export default TicketModalStyle
