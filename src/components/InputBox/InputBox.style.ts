import styled from "styled-components";

type TextFieldStyleProps = {
  width?: string;
};

export const TextFieldStyle = styled.input<TextFieldStyleProps>`
  height: 53px;
  border-radius: 50px;
  border: 1px solid #0c0c0c;
  outline: 0;
  padding: 15px 25px;
  font-size: 18px;
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "unset")};
`;
export const TextFieldErrorStyle = styled.div`
  color: #dc3545;
`;

export const InputBoxStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  position: relative;

  .password-icon {
    position: absolute;
    bottom: 15px;
    right: 20px;
  }

  .input-label {
    font-size: 14px;
    color: #0c0c0c;
    font-weight: 500;
    margin-left: 15px;
  }

  .input-info {
    font-size: 14px;
    color: #0c0c0c;
    opacity: 0.5;
    margin-top: 10px;
  }
`;
