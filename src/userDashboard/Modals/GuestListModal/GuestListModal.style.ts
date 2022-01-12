import styled from 'styled-components'

const GuestListModalStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 768px;
  gap: 10px;
  padding-top: 15px;
  border-top: 2px solid #ccc;
  max-height: 555px;
  overflow: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
  }
`;
export default GuestListModalStyle;
