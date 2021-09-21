import { rgba } from "polished";
import styled from "styled-components";

export const ContactInfoFormStyle = styled.div`
  .headings-with-inputs {
    padding: 30px 0;
    border-bottom: 1px solid ${rgba("#0c0c0c", 0.5)};

    .inputs-wrapper {
      display: flex;
      grid-gap: 20px;
    }
  }
`;
