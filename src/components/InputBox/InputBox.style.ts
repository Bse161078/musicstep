import styled from 'styled-components'

export const TextFieldStyle = styled.input`
    height: 38px;
    border-radius: 4px;
    border: 1px solid  var(--fk-theme-color--primary--background,var(--blue,#179fff));
    outline:  var(--fk-theme-color--primary--background,var(--blue,#179fff));
    padding: 0 10px;
`
export const TextFieldErrorStyle = styled.div`
    color: #dc3545;
`;