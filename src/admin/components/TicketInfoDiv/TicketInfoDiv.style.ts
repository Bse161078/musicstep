import styled from "styled-components";


const TicketInfoDivStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:#F7F7F7;
        border-radius: 32px;
        gap: 25px;
        max-width: 280px;
        padding: 20px;
        text-align: center;
        .credits {
           color: #FF33CC;
           font-size: 30px;
           font-weight: bold;
        }
        .tickets {
                color: #0C0C0C;
                font-size: 16px;
        }
        .description {
             color: #373737;
             font-size: 16px;
             opacity: 0.5;
        }
        .button-wrapper {
           display: flex;
           justify-content: center;
           gap:07px;
        }
` 

export default TicketInfoDivStyle