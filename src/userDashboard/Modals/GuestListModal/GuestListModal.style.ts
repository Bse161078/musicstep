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
`;
export default GuestListModalStyle;
