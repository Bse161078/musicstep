import styled from "styled-components";

export const ContentHeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    grid-gap: 80px;

    @media ( max-width: 767px ) {
        flex-direction: column;
        justify-content: flex-start;
        grid-gap: 20px;
    }

    .content-heading-wrapper {
        display: grid;
        grid-gap: 10px;
    }
`