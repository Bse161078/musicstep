import styled from "styled-components";

export const SliderStyle = styled.div`
  display: flex;
  width: 60vw;
  overflow: auto;
  gap: 20px;
  margin-top: 30px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    width: 100px;
  }

  &::-webkit-scrollbar {
    width: 100px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
    display: none;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    margin-right: 20px;
    height: auto;
  }
`;
