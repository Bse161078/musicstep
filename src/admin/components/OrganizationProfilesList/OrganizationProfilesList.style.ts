import styled from "styled-components";
import { TableRowStyle } from "../../../styles/Common.style";

export const OrganizationProfilesListStyle = styled.section`
    display: grid;
    grid-row-gap: 10px;
    margin-top: 30px;
    padding-bottom: 30px;

    .no-data-message {
        color: #0C0C0C;
        opacity: 0.5;
        font-size: 14px;
        text-align: center;
        margin-top: 30px;
    }
`

export const OrganizationListItemStyle = styled.div`
    ${TableRowStyle};

    display: flex;
    justify-content: space-between;
    align-items: center;
`