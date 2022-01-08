import styled from "styled-components";

export const SliderStyle = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  gap: 20px;
  margin-top: 30px;

  &:-webkit-scrollbar {
    width: 10px;
  }
  &:-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  &:-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &:-webkit-scrollbar-thumb {
    /* background: red; */
    border-radius: 10px;
  }

  .carousel-image {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    margin-right: 20px;
    height: 100%;
  }
`;
