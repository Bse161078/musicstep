import styled from "styled-components";




export const UploadFileStyle = styled.img`
  width: ${props => props.width?props.width:"200px"};
  height: ${props => props.height?props.height:"200px"};
  border-radius: 15px;
  object-fit:contain;
  background:#ececec;
  padding:1px
`;
