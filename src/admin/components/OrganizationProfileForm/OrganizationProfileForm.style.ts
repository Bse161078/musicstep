import styled from "styled-components";
import { OrganizationDetailsFormStyle } from "../OrganizationDetailsForm/OrganizationDetailsForm.style";

export const OrganizationProfileFormStyle = styled.main`
  ${OrganizationDetailsFormStyle} {
    border-bottom: 0;
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

    @media ( max-width: 767px ) {
      grid-template-columns: 1fr;
    }
  }
`;
