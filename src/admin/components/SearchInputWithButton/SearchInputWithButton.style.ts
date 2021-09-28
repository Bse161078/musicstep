import styled from "styled-components";

export const SearchInputWithButtonStyle = styled.header`
    display: flex;
    justify-content: space-between;

    @media ( max-width: 767px ) {
        flex-direction: column;
        grid-gap: 20px;
    }

    .search-wrapper {
        display: flex;
        grid-column-gap: 10px;
        align-items: center;
    }
`