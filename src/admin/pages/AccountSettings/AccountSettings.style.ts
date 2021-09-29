import styled from "styled-components"

export const AccountSettingsStyle = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @media ( max-width: 1024px ) {
        display: flex;
        flex-wrap: wrap;
    }
`