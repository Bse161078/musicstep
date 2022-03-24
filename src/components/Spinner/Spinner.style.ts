import styled from "styled-components";

export const SpinnerStyle = styled.div`
.loader {
    margin: 0px auto;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid grey;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`