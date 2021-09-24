import { rgba } from "polished"
import styled from "styled-components"

export const UpcomingEventsStyle = styled.div`

`

export const FormHeaderStyle = styled.div`
    color: #0C0C0C;
    font-size: 14px;
    font-weight: bold;
    background-color: #F7F7F7;
    border-radius: 24px;
    padding: 15px 85px;
    display: grid;
    grid-template-columns: auto 225px 1fr;
    grid-gap: 30px;
`

export const FormRowStyle = styled.div`
    display: flex;
    grid-template-columns: auto 120px 370px 1fr;
    grid-gap: 30px;
    padding: 20px 0;
    border-bottom: 1px solid ${rgba("#0c0c0c", 0.3)};

    .thumbnail {
        max-width: 56px;
    }
`