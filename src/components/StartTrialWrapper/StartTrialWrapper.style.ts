import styled from "styled-components"

export const StartTrialWrapperStyle = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    padding: 30px;
    background: #F7F7F7;
    margin: 100px 50px;
    border-radius: 32px;

    @media( max-width: 767px ) {
        grid-template-columns: 1fr;
    }

    .left-section {
        display: grid;
        grid-row-gap: 30px;

        @media ( max-width: 767px ) {
            display: none;
        }

        .left-thumb {
            max-width: 100%;
        }

        .trial-heading {
            font-size: 48px;
            color: #0C0C0C;
        }

        .trail-description {
            font-size: 20px;
            color: #0C0C0C;
        }
    }
`