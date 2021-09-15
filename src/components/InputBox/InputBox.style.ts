import styled from 'styled-components'

export const TextFieldStyle = styled.input`
    height: 53px;
    border-radius: 50px;
    border: 1px solid  #0C0C0C;
    outline:  0;
    padding: 15px 25px;
    font-size: 18px;
    width: 100%;
`
export const TextFieldErrorStyle = styled.div`
    color: #dc3545;
`;

export const InputBoxStyle = styled.div`
    display: grid;
    grid-gap: 5px;

    .input-label {
        font-size: 14px;
        color: #0C0C0C;
        font-weight: 400;
        margin-left: 15px;
    }
`