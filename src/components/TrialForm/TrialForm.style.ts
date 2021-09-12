import styled from "styled-components";

export const TrialFormStyle = styled.div`
    .trial-price {
        font-size: 80px;
        color: #0C0C0C;
        text-align: center;
    }

    .price-description {
        font-size: 20px;
        text-align: center;
        color: #0C0C0C;
        margin-bottom: 30px;
    }

    .trial-form-wrapper {
        display: grid;
        grid-row-gap: 30px;
    }
`

export const IconWithTextStyle = styled.figure`
    display: flex;
    grid-template-columns: auto 1fr;
    grid-column-gap: 30px;
    align-items: center;
    margin-bottom: 20px;
`