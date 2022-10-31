import styled from 'styled-components'
import { OrganizationDetailsFormStyle } from '../OrganizationDetailsForm/OrganizationDetailsForm.style'

export const OrganizationProfileFormStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${OrganizationDetailsFormStyle} {
    border-bottom: 0;
  }
  .showCase-wrapper {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    background: #f7f7f7;
    padding: 30px;
    border-radius: 32px;
    gap: 30px;
    }
    h1 {
      font-size: 2vw;
    }
    p {
      font-size: 1vw;
    }
    .showcase-img {
      max-width: 100%;
  height: 100%;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
  gap: 20px;
  }
  .bio-wrapper {
    display: grid;
    grid-gap: 30px;
  }
    
  .social-media-wrapper {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 30px;
    border-top: 1px solid #c0c0c0;
  }

  .inputs-wrapper {
    padding-top: 30px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 0.8fr 1.2fr 1fr 1fr;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  .file-wrapper {
    display: flex;
    gap: 30px;
    padding: 20px 0px;
    flex-direction: column;

    .child-Filewrapper {
      display: flex;
      gap: 30px;
      .error-message{
        color: #dc3545;
        display: block;
      }
      
    }
  }
  
  .socialLinks-wrapper {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
  .policy-list {
    display: grid;
    grid-template-columns: 1fr 1fr;

    label.ant-checkbox-wrapper  {
      font-size: 20px;
      margin-left: 0;
    }
  }
    .attributes-wrapper {
    background: #f7f7f7;
    border-radius: 32px;
    padding: 20px;
    max-width: 675px;
    max-height: 322px;
  }
   .list-wrapper {
    display: grid;
    border-radius: 1px solid red;
    grid-template-columns: 1fr 1fr;

    label {
      font-size: 20px;
      margin-left: 0;
    }
  }
`
