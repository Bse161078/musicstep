import { Page } from "./../../../stories/Page";
import { socialLinks } from "./../../../mockData/footer";
import styled from "styled-components";

export const AddVenueProfileFormStyle = styled.div`
  .file-wrapper {
    display: flex;
    gap: 30px;
    padding: 20px 0px;
    flex-direction: column;
    .child-Filewrapper {
      display: flex;
      gap: 30px;
    }
  }
  .socialLinks-wrapper {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
  .location-and-amenstiesWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .location-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .form-wrapper {
    display: grid;
    gap: 20px;
  }
  .amenties-wrapper {
    background: #F7F7F7;
    border-radius: 32px;
    padding: 20px;
    max-height:332px;
    
  }
  .radio-text {
    display: flex;
    paddig
    font-size: 16px;
  }
   .policy-list{
     font-size: 16px;
   }
`;
