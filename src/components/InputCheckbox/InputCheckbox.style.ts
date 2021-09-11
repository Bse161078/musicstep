import styled from "styled-components"

export const CheckboxWrapperStyle = styled.article`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
    align-items: center;
    
    .checkbox-label {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.textColors.primary};
    }
`