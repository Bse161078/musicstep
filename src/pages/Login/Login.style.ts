import styled from "styled-components"

export const LoginStyle = styled.main`
    margin-top: 96px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 100px;
    @media ( max-width: 767px) {
        grid-template-columns: 1fr;
    }

    .side-image {
        max-width: 860px;
        width: 100%;
        @media ( max-width: 767px) {
            display: none;
        }
    }
`