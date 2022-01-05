import styled from 'styled-components'
import { OrganizationDetailsFormStyle } from '../OrganizationDetailsForm/OrganizationDetailsForm.style'

export const OrganizationProfileFormStyle = styled.main`
  ${OrganizationDetailsFormStyle} {
    border-bottom: 0;
  }
  .showCase-wrapper {
    display: flex;
    background: #f7f7f7;
    padding: 30px;
    border-radius: 32px;
    gap: 25px;
    }
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 20px;
    }
     .showcase-img {
      height: 190px;
    }
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
    grid-template-columns: 1fr 1fr;

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
  
`
